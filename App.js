import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import MainBottomTabs from "./src/components/MainBottomTabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainBottomTabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}