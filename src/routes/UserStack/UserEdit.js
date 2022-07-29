import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { updateProfile } from "../../services/Database";

export default function UserEdit({ route, navigation }) {
  const currentProfile = route.params;

  const [username, setUsername] = useState(currentProfile.username);
  const [role, setRole] = useState(currentProfile.role);

  const saveProfile = async () => {
    await updateProfile(currentProfile.uid, { username: username, role: role });
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Image
          source={require("../../assets/images/user.png")}
          style={styles.cardImage}
        />
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      ></TextInput>

      <TextInput
        style={styles.input}
        onChangeText={setRole}
        value={role}
      ></TextInput>

      <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
        <Text style={{ alignSelf: "center" }}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F2F5",
    flex: 1,
    flexDirection: "column",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  headingText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.38)",
  },
  formContainer: {
    width: "100%",
    marginTop: 100,
  },
  formInputHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 2,
    color: "rgba(0, 0, 0, 0.38)",
  },
  formInputPicker: {
    width: "100%",
    height: 60,
    backgroundColor: "#f2f2f2f2",
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 35,
    justifyContent: "center",
    padding: 10,
    fontSize: 18,
  },
  formInput: {
    width: "100%",
    height: 60,
    backgroundColor: "#f2f2f2f2",
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 35,
    padding: 10,
    fontSize: 18,
  },

  saveButton: {
    backgroundColor: "#006ee6",
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
    height: 60,
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    marginBottom: 100,
  },
  saveButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  // saveButton: {
  //   borderStyle: "dotted",
  //   borderWidth: 1,
  //   borderColor: "gray",
  //   position: "absolute",
  //   right: 0,
  //   alignSelf: "center",
  //   textAlign: "center",
  //   width: "20%",
  //   backgroundColor: "transparent",
  //   padding: 10,
  //   borderRadius: 5,
  // },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 6,
    left: 0,
  },
});
