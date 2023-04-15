import { VStack, Heading, Text, Box, HStack, Image, Badge, ScrollView, Pressable } from "native-base";
import * as Linking from 'expo-linking';

export default function NewsScreen() {
  return(
      <ScrollView>
    <VStack p={5}>
      <Heading pb={5}>
        Learn <Text color='blue.800'>More</Text> about...
      </Heading>
        <VStack space={4}>
          <Pressable 
            id='ballot' 
            p={2} 
            borderColor='#000000'
            borderWidth={1}
            borderRadius={5}
            bg={"coolGray.100"}
            shadow={2}
            onPress={() => Linking.openURL("https://vt.ncsbe.gov/reglkup/")}
          >
            <VStack flex='1'>
              <Text fontWeight='bold' fontSize='xl'>
                May 17th Ballot Preview
              </Text>
              <Text>
                Voting ballots can be overwhelming to take in, especially if you have never voted before. 
                In this Votable Learn article, we will break down the various parts you need to understand before entering the voting booth.
                Plus, we'll show you how to find the ballot you will see on election day, courtesy of the state voter search service.
              </Text>
              <Text mt="2" mb={2} mr={3} fontSize={12} fontWeight="medium" color="darkBlue.600" textAlign='right'>
                Ballot Preview →
              </Text>
            </VStack>
            <Image 
              resizeMode='contain' 
              style={{ width: 500, height: 200 }} 
              source={{ uri: "https://npr.brightspotcdn.com/dims4/default/0e11315/2147483647/strip/true/crop/1035x582+0+97/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fa9%2F8f%2Feb486b6d4190b14d77c9402e2918%2Fsample-ballot.png" }}
              alt=''
            /> 
          </Pressable>
          <Pressable 
            id='ballot' 
            p={2} 
            borderColor='#000000'
            borderWidth={1}
            borderRadius={5}
            bg={"coolGray.100"}
            shadow={2}
            onPress={() => Linking.openURL("https://www.ncsbe.gov/registering/how-register")}
          >
            <VStack flex='1'>
              <Text fontWeight='bold' fontSize='xl'>
                Get Registered Soon!
              </Text>
              <Text>
                The deadline to register is fast approaching, so make sure you do it in time.
                Registering is a simple, quick process. You can register online, in-person at the DMV, or by mail.
                In this Votable Learn article, we'll outline all of the steps necessary to make sure you are prepared for voting day.
              </Text>
              <Text mt="2" mb={2} mr={3} fontSize={12} fontWeight="medium" color="darkBlue.600" textAlign='right'>
                Voter Registration Guide →
              </Text>
            </VStack>
            <Image 
              resizeMode='contain' 
              style={{ width: 500, height: 200 }} 
              source={{ uri: "https://i.ytimg.com/vi/ZvYUqlFgpw0/maxresdefault.jpg" }}
              alt=''
            /> 
          </Pressable>
          <Pressable 
            id='ballot' 
            p={2} 
            borderColor='#000000'
            borderWidth={1}
            borderRadius={5}
            bg={"coolGray.100"}
            shadow={2}
            onPress={() => Linking.openURL('https://www.cityofws.org/129/Agendas-Minutes')}
          >
            <VStack flex='1'>
              <Text fontWeight='bold' fontSize='xl'>
                What's up in your city?
              </Text>
              <Text>
                Did you know? The city of Winston-Salem publishes its minutes from every Council meeting and vote.
                For example, there were 26 items of business from last week's meeting, mainly pertaining to zoning and planning.
                Tap on the link to see what else the Council is up to.
              </Text>
              <Text mt="2" mb={2} mr={3} fontSize={12} fontWeight="medium" color="darkBlue.600" textAlign='right'>
                Meeting Minutes →
              </Text>
            </VStack>
            <Image 
              resizeMode='contain' 
              style={{ width: 500, height: 200 }} 
              source={{ uri: "https://npr.brightspotcdn.com/dims4/default/0e11315/2147483647/strip/true/crop/1035x582+0+97/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fa9%2F8f%2Feb486b6d4190b14d77c9402e2918%2Fsample-ballot.png" }}
              alt=''
            /> 
          </Pressable>
        </VStack>
        <Box h={100} />
    </VStack>
      </ScrollView>
  )
}