import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CompEntry from "./CompEntry";
import CompCreate from "./CompCreate";
import CompDetails from "./CompDetails";
import CompList from "./CompList";

const Stack = createNativeStackNavigator();

const CompStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CompList"
      screenOptions={{
        headerShown: true, // false: hides the header for CompsSreen "AllComps".
      }}
    >
      <Stack.Screen name="CompEntry" component={CompEntry} />
      <Stack.Screen name="CreateComp" component={CompCreate} />
      <Stack.Screen name="CompDetails" component={CompDetails} />
      <Stack.Screen name="CompList" component={CompList} />
    </Stack.Navigator>
  );
};

export default CompStack;
