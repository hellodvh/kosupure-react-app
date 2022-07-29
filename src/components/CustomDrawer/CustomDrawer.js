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
            backgroundColor: "#006ee6",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1581661701347-6e695689365b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zcGxheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
              }}
              style={{ width: 60, height: 60, borderRadius: 6 }}
            />
          </TouchableOpacity>
          <View>
            <Text>{username}</Text>
            <Text>{email}</Text>
            <Text>Cosplayer</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          alignSelf: "center",
          textAlign: "center",
          bottom: 50,
          width: "80%",
          backgroundColor: "#006ee6",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ alignSelf: "center" }} onPress={onSignOutPress}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({});
