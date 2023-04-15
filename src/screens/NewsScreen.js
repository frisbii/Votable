import { VStack, Heading, Text, Box, HStack, Image, Badge, ScrollView, Pressable } from "native-base";
import * as Linking from 'expo-linking';

let news_data = [
  {
    type: 'Local',
    title: "Winston-Salem City Council Jeff MacIntosh won't run for re-election in 2024",
    blurb: "Northwest Ward Council Member Jeff MacIntosh will not seek a fourth term on the Winston-Salem City Council when his current term is up in...",
    url: "https://journalnow.com/news/local/govt-and-politics/winston-salem-city-council-jeff-macintosh-wont-run-for-re-election-in-2024/article_c58ae6e0-973e-11ed-be76-f7f35da61aa1.html",
    uri: "https://bloximages.newyork1.vip.townnews.com/journalnow.com/content/tncms/assets/v3/editorial/4/98/498ce070-6e81-11ec-b963-8bd05b1cabeb/61d0ad002e8c3.image.jpg"
  },
  {
    type: 'National',
    title: "Who’s Running for President in 2024?",
    blurb: "Four years after a historically large number of candidates ran for president, the field for the 2024 campaign is starting out small and...",
    url: "https://www.nytimes.com/interactive/2023/us/politics/presidential-candidates-2024.html",
    uri: "https://static01.nyt.com/images/2023/02/21/multimedia/2023-02-10-2024-candidate-tracker-index/2023-02-10-2024-candidate-tracker-index-facebookJumbo-v13.jpg"
  },
  {
    type: 'Local',
    title: "Winston-Salem's Mayor Allen Joines announces bid for re-election in 2024",
    blurb: "At 10:30 a.m. today, on the steps of City Hall, Winston-Salem Mayor Allen Joines announced his bid for re-election next year.",
    url: "https://triad-city-beat.com/winston-salems-mayor-allen-joines-announces-bid-for-re-election-in-2024/",
    uri: "https://triad-city-beat.com/wp-content/uploads/2023/04/920568e623517b0ebaa44a635ee62325-960x600-c-default.webp"
  },
  {
    type: 'State',
    title: "Cotham formalizes party switch to North Carolina GOP",
    blurb: "North Carolina state Rep. Tricia Cotham has formally changed her party registration from Democrat to Republican in a...",
    url: "https://spectrumlocalnews.com/nc/triangle-sandhills/news/2023/04/11/cotham-formalizes-party-switch-to-north-carolina-gop",
    uri: "https://s7d2.scene7.com/is/image/TWCNews/tricia_cotham_ap041123_04112023?wid=1250&hei=703&$wide-bg$"
  }
]

export default function NewsScreen() {
  let listNews = news_data.map(n => {
    return (
    <Pressable 
      id={n.title} 
      p={2} 
      borderColor='coolGray.300'
      borderWidth={1}
      borderRadius={5}
      bg={"coolGray.100"}
      shadow={1}
      onPress={() => Linking.openURL(n.url)}
    >
      <Badge colorScheme="darkBlue" _text={{ color: "white" }} variant="solid" rounded="4">
        {n.type}
      </Badge>
      <HStack justifyContent='space-between' pt={2} space={2} alignItems='center'>
        <VStack flex='1'>
          <Text fontWeight='bold'>
            {n.title}
          </Text>
          <Text>
            {n.blurb}
          </Text>
        </VStack>
        <Image 
          resizeMode='cover' 
          style={{ width: 70, height: 70 }} 
          source={{ uri: n.uri }}
          alt=''
          borderWidth={1}
          borderColor='black'
          borderRadius={10}
        /> 
      </HStack>
    </Pressable>
  )})
  return(
      <ScrollView>
    <VStack p={5}>
      <Heading pb={5}>
        Your <Text color='blue.800'>News</Text>
      </Heading>
        <VStack space={4}>
          {listNews}
        </VStack>
        <Box h={100} />
    </VStack>
      </ScrollView>
  )
}