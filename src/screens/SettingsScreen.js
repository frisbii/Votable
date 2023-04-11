import { HStack, Switch, VStack, View, Text, Spacer } from "native-base";

function SettingDef() {
  return(
    <HStack alignItems='center'>
      <Text fontSize='md'>does a thing</Text>
      <Spacer />
      <Switch />
    </HStack>
  )
}

export default function SettingsScreen() {
  return(
    <View>
      <VStack m={8} space={4}>
        <SettingDef />
        <SettingDef />
        <SettingDef />
        <SettingDef />
        <SettingDef />
      </VStack>
    </View>
  )
}