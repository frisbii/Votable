import { Fragment } from 'react';
import { Box, Divider, Text, HStack, VStack, Button, Pressable } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ElectionResult( r, candidates ) {
  const winningCandidate = candidates.reduce((a, b) => a.percent > b.percent ? a : b);

  return (
    <Text alignItems='center'>
      {candidates.map((candidate, index) => {
        const lastName = candidate.name.split(' ').pop();
        return (
          <Fragment key={index}>
            {candidate.percent === (r && winningCandidate.percent) && (
              <>
              <Ionicons name="checkmark-circle" size={16} color={candidate.party === 'Republican' ? 'red' : 'blue'} />
              <Text fontWeight='medium'>({candidate.percent}%) </Text>
              </>
            )}
            {lastName}
            {index < candidates.length - 1 ? ', ' : ''}
          </Fragment>
        )
      })}
    </Text>
  );
}

function ElectionEntry({ r, race, parties, candidates }) {
  let lns = ElectionResult(r, candidates);

  return(
    <Pressable>
      <HStack justifyContent='space-between'>
        <VStack flex='1' p={2} px={4}>
          <Text fontWeight='medium' fontSize='lg'>
            {race}
          </Text>
          {lns}
        </VStack>
        <Button variant='ghost'>
          <Ionicons name="chevron-forward" size={20} />
        </Button>
      </HStack>
    </Pressable>
  )
}

export default function ElectionList ({ r, data, type }) {
  const listElections = data.map((e) => {
    return(
      <Box id={e.name}>
        <ElectionEntry r={r} {...e} />
        <Divider />
      </Box>
    )
  }

  );
  return(
    <Box>
      <Text fontWeight='bold' fontSize='lg' pt={6} pl={5} pb={1}>
        {type}
      </Text>
      <Divider />
      {listElections}
    </Box>
  )
}
