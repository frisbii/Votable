import { Box, Pressable, HStack, Badge, Spacer, Flex, Text, VStack, Center, ScrollView, Avatar } from 'native-base';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <VStack space={4} padding={4} alignItems='center'>
        <Text bold fontSize='3xl'>Hello, <Text color='blue.800'>Tyler</Text></Text>

        <Box alignItems="center">
          <Pressable onPress={() => navigation.navigate('Races')} 
            rounded="8" borderWidth="1" borderColor="coolGray.300" shadow="1" bg="blue.50" p="5">
            <Box>
              <HStack>
                <Badge colorScheme="darkBlue" _text={{ color: "white" }} variant="solid" rounded="4">
                  Upcoming Elections
                </Badge>
                <Spacer />
                <Text>
                  April 29
                </Text>
              </HStack>
              <Box alignItems='center'>
              <Text mt="3" fontWeight="medium" fontSize="3xl">
                19 days away
              </Text>
              <Text fontWeight="medium" fontSize="xl">
                Municipal General Election
              </Text>
              </Box>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerfull time-saving tools for creating email delivery and
                collecting marketing data
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
          <Pressable onPress={() => navigation.navigate('Candidates')} rounded="8" borderWidth="1" borderColor="coolGray.300" shadow="1" bg="coolGray.100" p="5">
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
                Unlock powerfull time-saving tools for creating email delivery and
                collecting marketing data
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
          <Pressable onPress={() => navigation.navigate('Learn')} rounded="8" borderWidth="1" borderColor="coolGray.300" shadow="1" bg="coolGray.100" p="5">
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
                Unlock powerfull time-saving tools for creating email delivery and
                collecting marketing data
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