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
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
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
          source={require("../../../assets/images/registerHeader.png")}
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

      <Button
        title="Go to Login Screen"
        onPress={() => navigation.navigate("Login")}
      />
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
      backgroundColor: "#0C0C1C",
    },
    headerContainer: {},
    headerText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 28,
    },
    headerImage: {},
    formContainer: {
      width: "80%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    headerText: {
      fontSize: 32,
      fontStyle: "normal",
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
      paddingTop: 35,
      paddingBottom: 35,
    },
    usernameInput: {
      width: "100%",
      height: 60,
      backgroundColor: "#f2f2f2f2",
      borderRadius: 12,
      marginBottom: 35,
      padding: 10,
      fontSize: 18,
    },
    emailInput: {
      width: "100%",
      height: 60,
      backgroundColor: "#f2f2f2f2",
      borderRadius: 12,
      marginBottom: 35,
      padding: 10,
      fontSize: 18,
    },
    passwordInput: {
      width: "100%",
      height: 60,
      backgroundColor: "#f2f2f2f2",
      borderRadius: 12,
      marginBottom: 35,
      padding: 10,
      fontSize: 18,
    },
    registerButton: {
      backgroundColor: "#f2f2f2f2",
      width: "80%",
      height: 60,
      borderColor: "grey",
      borderWidth: 2,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 35,
    },
    registerButtonText: {
      fontSize: 18,
      color: "#000",
      fontWeight: "bold",
    },
  });
