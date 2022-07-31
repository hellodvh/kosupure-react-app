//import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import React, { useState } from "react";
//import Appstyles from "./App.scss";

import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/routes/MainStack";

//useFonts
//DMSans
import {
  useFonts as useDMSans,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

//Rubik
import {
  useFonts as useRubik,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

export default function App() {
  //useFont Hooks
  const [dmsansLoaded] = useDMSans({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });
  const [rubikLoaded] = useRubik({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });
  if (!dmsansLoaded || !rubikLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
