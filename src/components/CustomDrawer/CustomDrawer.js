import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const CustomDrawer = (props, { navigation }) => {
  const [email, setEmail] = useState(auth.currentUser.email);
  const [username, setUsername] = useState(auth.currentUser.username);
  const [role, setRole] = useState(auth.currentUser.role);

  const onSignOutPress = () => {
    signOut(auth)
      .then(() => {
        //Success
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            alignItems: "center",
            backgroundColor: "#5B83D7",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={require("../../assets/images/user.png")}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "column" }}>
            <Text>{username}</Text>
            <Text>{email}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={onSignOutPress}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  logoutButton:{
    backgroundColor: "#F2A385",
    width: 200,
    height: 50,
    bottom: 50,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 35,
    elevation: 3,
    marginVertical:10,
    marginHorizontal: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
  },
});
