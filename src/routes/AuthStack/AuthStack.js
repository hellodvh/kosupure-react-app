import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen/RegisterScreen";

const Stack = createNativeStackNavigator();


export default function AuthStack({}) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
