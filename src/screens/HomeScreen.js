import { Box, Pressable, HStack, Badge, Spacer, Flex, Text, VStack, Center, ScrollView, Avatar } from 'native-base';

import appData from '../data/app_data.json'


export default function HomeScreen({ navigation }) {
  const daysUntil = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const diffInMs = date - today;
    const diffInDays = Math.round(diffInMs / oneDay);
    return diffInDays;
  };  

  return (
    <ScrollView>
      <VStack space={4} padding={4} alignItems='center'>
        <Text bold fontSize='3xl'>Hello, <Text color='blue.800'>{appData.username}</Text></Text>

        <Box alignItems="center">
          <Pressable onPress={() => navigation.navigate('Elections', { screen: 'Races' })} 
            rounded="8" borderWidth="1" borderColor="coolGray.300" shadow="1" bg="blue.50" p="5">
            <Box>
              <HStack>
                <Badge colorScheme="darkBlue" _text={{ color: "white" }} variant="solid" rounded="4">
                  Upcoming Elections
                </Badge>
                <Spacer />
                <Text>
                  May 17
                </Text>
              </HStack>
              <Box alignItems='center'>
              <Text mt="3" fontWeight="medium" fontSize="3xl">
                {daysUntil('2023-05-17')} days away
              </Text>
              <Text fontWeight="medium" fontSize="xl">
                Primary Elections
              </Text>
              </Box>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Elections at the local, state, and national level. 
                Primary elections decide who gets to run for office in the final election.
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                  Go to elections dashboard →
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>

        <Box alignItems="center">
          <Pressable onPress={() => navigation.navigate('Elections', { screen: 'Races' })}
            rounded="8" borderWidth="1" borderColor="coolGray.300" 
            shadow="1" bg="coolGray.100" p="5">
            <Box>
              <HStack alignItems="center">
                <Badge colorScheme="darkBlue" _text={{ color: "white" }} variant="solid" rounded="4">
                  People to Know
                </Badge>
                <Spacer />
              </HStack>
              <HStack alignItems='center'>
                <VStack mt='2'>
                  <Text fontWeight='medium' fontSize='2xl'>
                    Joyce Krawiec
                  </Text>
                  <Text fontSize='lg'>
                    NC Senate, District 31
                  </Text>
                </VStack>
                <Spacer />
                <Avatar source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Senator_Joyce_Krawiec.jpg' }} />
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Joyce Krawiec serves in the North Carolina Senate. She is generally considered a conservative candidate.
                She sponsored Burt's Law, one focused on ending nursing home abuse.
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                  Go to candidates dashboard →
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>

        <Box alignItems="center">
          <Pressable onPress={() => navigation.navigate('Elections', { screen: 'Learn' })}
            rounded="8" borderWidth="1" borderColor="coolGray.300" 
            shadow="1" bg="coolGray.100" p="5"
          >
            <Box>
              <HStack alignItems="center">
                <Badge colorScheme="darkBlue" _text={{ color: "white" }} variant="solid" rounded="4">
                  Learn
                </Badge>
                <Spacer />
              </HStack>
              <Text fontWeight='medium' mt='2' fontSize='2xl'>
                What will my ballot look like?
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                The voting ballot can be a difficult maze to navigate, particularly on busy elections like 
                the General Elections. Find out the in's and out's of the ballot in our Votable Learn article.
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                  Go to learn →
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>

      </VStack>
    </ScrollView>
  )
}