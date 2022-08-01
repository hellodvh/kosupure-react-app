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
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/user.png")}
        style={styles.cardImage}
      />
      <TextInput
        style={styles.formInput}
        onChangeText={setUsername}
        value={username}
      ></TextInput>

      <TextInput
        style={styles.formInput}
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#5B83D7",
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
    backgroundColor: "#F1E088",
    width: 260,
    height: 50,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    elevation: 3
  },
  saveButtonText: {
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 6,
    left: 0,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
