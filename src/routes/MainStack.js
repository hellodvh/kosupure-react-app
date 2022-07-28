import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack/AuthStack";
import DrawerNavigator from "../components/DrawerNavigator";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.config";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [state, setState] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        setState({});
      } else {
        setLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator>
      {loggedIn ? (
        <>
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Authentication"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
