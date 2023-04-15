import { useState } from 'react';
import { Box, Text, Button, Heading, VStack, HStack, ScrollView } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import electionsData from '../data/election_data.json'
import ElectionList from '../components/ElectionList';

export default function RacesScreen () {
  const [currentElectionIndex, setCurrentElectionIndex] = useState(0);

  const currentElection = electionsData[currentElectionIndex];
  const hasPrev = currentElectionIndex > 0;
  const hasNext = currentElectionIndex < electionsData.length - 1;

  const navigateToPreviousElection = () => {
    if (hasPrev) {
      setCurrentElectionIndex(currentElectionIndex - 1);
    }
  };

  const navigateToNextElection = () => {
    if (hasNext) {
      setCurrentElectionIndex(currentElectionIndex + 1);
    }
  };

  return(
      <ScrollView>
    <VStack>
      <HStack
        justifyContent='space-between'
        alignItems='center'
        p='2'
        backgroundColor='#d4d4ff'
        borderBottomColor='#000000'
      >
        <Button 
          variant='ghost'
          onPress={navigateToPreviousElection}
        >
          <Ionicons name="chevron-back-circle" size={35} 
            color={hasPrev ? '#000080' : '#9e9ed7'}
          />
        </Button>
        <VStack alignItems='center'>
          <Heading>{currentElection.date}</Heading>
          <Text>{currentElection.name}</Text>
        </VStack>
        <Button 
          variant='ghost'
          onPress={navigateToNextElection}
        >
          <Ionicons name="chevron-forward-circle" size={35} 
            color={hasNext ? '#000080' : '#9e9ed7'}
          />
        </Button>
      </HStack>
        <HStack pt={2} justifyContent='center' space={1}>
          <Ionicons name="location-sharp" size={20} color='gray' />
          <Text color='gray.500'>Forsyth County, NC</Text>
        </HStack>
        <ElectionList r={currentElection.results} data={currentElection.local} type='LOCAL' />
        <ElectionList r={currentElection.results} data={currentElection.state} type='STATE' />
        <ElectionList r={currentElection.results} data={currentElection.national} type='NATIONAL' />
        <Box h={100} />
    </VStack>
      </ScrollView>
  )
}