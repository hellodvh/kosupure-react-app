//import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import React from "react";
//import Appstyles from "./App.scss";

import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/routes/MainStack";

export default function App() {
  return (
    // <View style={Appstyles.container}>
    //   <Text style={Appstyles.text}>Kosupure App!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <PaperProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
