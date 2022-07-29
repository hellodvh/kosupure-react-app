import React from "react";
import { StyleSheet } from "react-native";
// import Appstyles from "./DrawerNavigator.scss";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/HomeScreen/HomeScreen";
// import CompStack from "../routes/CompStack/CompStack";
// import UserStack from "../routes/UserStack/UserStack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#f2f2f2",
          width: 240,
        },
        drawerPosition: "left",
        drawerType: "slide",
        keyboardDismissMode: "on-drag",
        headerTitle: { alignItems: "center" },
        headerTitleAlign: "center",
        headerShown: true,
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      {/* Home/Dashboard Screen */}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerIcon: () => <IconContainer name="home" /> }}
      />
      {/* Competition Screen */}
      {/* <Drawer.Screen
        name="Competitions"
        component={CompStack}
        options={{ drawerIcon: () => <IconContainer name="event-available" /> }}
      /> */}
      {/* Cosplayer Screen */}
      {/* <Drawer.Screen
        name="Cosplayers"
        component={UserStack}
        options={{ drawerIcon: () => <IconContainer name="person" /> }}
      /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
//https://icons.expo.fyi/ - All expo icons
const IconContainer = (props) => {
  return <MaterialIcons name={props.name} color="#000" size={20} />;
};
