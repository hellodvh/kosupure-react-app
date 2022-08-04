import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { auth } from "../../config/firebase.config";

export default function UserDetail({ route, navigation }) {
  const currentProfile = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
editButton: {
    borderWidth: 1,
    position: "absolute",
    right: 0,
    textAlign: "center",
    height: 30,
    backgroundColor: "#F2A385",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    margin: 10,
    backgroundColor: "#F1E088",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 10,
  },
  editButtonText: {
    fontSize: 12,
    fontFamily: "DMSans_400Regular",
    fontWeight: "400",
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#5B83D7",
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10, //
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#5B83D7",
  },
});
