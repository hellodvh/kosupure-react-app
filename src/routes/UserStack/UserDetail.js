import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { auth } from "../../config/firebase.config";

export default function UserDetail({ route, navigation }) {
  const currentProfile = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/user.png")}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.heading}>{currentProfile.username}</Text>
          <Text style={styles.subheading}>{currentProfile.email}</Text>
          <Text style={styles.subheading}>{currentProfile.role}</Text>
        </View>

        {auth.currentUser.uid == currentProfile.uid ? (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.push("Edit Profile", currentProfile)}
          >
            <Text style={{ alignSelf: "center" }}>Edit</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
  heading: {
    fontSize: 24,
  },
  subheading: {},
  editButton: {
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "gray",
    position: "absolute",
    right: 0,
    alignSelf: "center",
    textAlign: "center",
    width: "20%",
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f1f2f3",
    borderRadius: 12,
    elevation: 3,
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#b2b2b2",
    shadowColor: "#e3e3e3",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 6,
    left: 0,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
