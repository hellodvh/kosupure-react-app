import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Alert,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { createUserOnRegister } from "../../services/Database";

export default function RegisterScreen({ navigation }) {
  const [username, onUsernameChange] = useState("");
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterPress = () => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        createUserOnRegister(user, username);

        navigation.replace("DrawerNavigator");
      })
      .catch((error) => {
        Alert.alert(error.message);
        setLoading(true);
      });
  };

  return (
    // Register Screen Container
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        {/* Header Imge */}
        <Image
          source={require("../../assets/images/KosupureImage.png")}
          style={styles.headerImage}
        />
        {/* Header Text */}
        <Text style={styles.headerText}>Register</Text>
      </View>
      {/* Form Container */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.usernameInput}
          defaultValue={username}
          onChangeText={onUsernameChange}
          textContentType="name"
          placeholder="Username"
          placeholderTextColor="grey"
          keyboardFocus={true}
          keyboardType="default"
          returnKeyType="next"
        ></TextInput>
        {/* Email Input */}
        <TextInput
          style={styles.emailInput}
          defaultValue={email}
          onChangeText={onEmailChange}
          textContentType="emailAddress"
          placeholder="Email Address"
          placeholderTextColor="grey"
          keyboardFocus={true}
          keyboardType="email-address"
          returnKeyType="next"
        ></TextInput>
        {/* Password Input */}
        <TextInput
          style={styles.passwordInput}
          defaultValue={password}
          onChangeText={onPasswordChange}
          textContentType="password"
          placeholder="Password"
          placeholderTextColor="grey"
          keyboardFocus={true}
          keyboardType="default"
          returnKeyType="next"
          autoCorrect={false}
          secureTextEntry={true}
        ></TextInput>
        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegisterPress}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <ActivityIndicator animating={loading} size="large" color="#006ee6" />

      {/* <Button
        title="Go to Login Screen"
        onPress={() => navigation.navigate("Login")}
      /> */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>Go to Login</Text>
      </Pressable>
    </View>
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

  headerContainer: {},
  headerImage: {},

  formContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
    textAlign: "center",
    color: "#66D8F2",
    paddingTop: 35,
    paddingBottom: 35,
  },
  usernameInput: {
    width: 320,
    height: 50,
    backgroundColor: "#f2f2f2f2",
    borderRadius: 10,
    marginBottom: 35,
    padding: 10,
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
    elevation: 3,
  },
  emailInput: {
    width: 320,
    height: 50,
    backgroundColor: "#f2f2f2f2",
    borderRadius: 10,
    marginBottom: 35,
    padding: 10,
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
    elevation: 3,
  },
  passwordInput: {
    width: 320,
    height: 50,
    backgroundColor: "#f2f2f2f2",
    borderRadius: 10,
    marginBottom: 35,
    padding: 10,
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
    elevation: 3,
  },
  registerButton: {
    backgroundColor: "#F1E088",
    width: 260,
    height: 50,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    elevation: 3,
  },
  registerButtonText: {
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
