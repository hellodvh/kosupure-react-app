import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserList from "./UserList";
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={UserList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={UserDetail}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={UserEdit}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
