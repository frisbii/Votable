import { HStack, Switch, VStack, View, Text, Spacer, Input, Heading } from "native-base";

function SettingDef({ desc }) {
  return(
    <HStack alignItems='center'>
      <Text fontSize='md'>{desc}</Text>
      <Spacer />
      <Switch />
    </HStack>
  )
}

export default function SettingsScreen() {
  return(
    <View>
      <VStack m={8} space={4}>
        <Heading>Votable <Text color='blue.800'>Settings</Text></Heading>
        <SettingDef desc="Toggle Local elections (WIP)" />
        <SettingDef desc="Toggle State elections (WIP)" />
        <SettingDef desc="Toggle National elections (WIP)" />
      </VStack>
    </View>
  )
}