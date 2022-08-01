import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";

import { auth } from "../../config/firebase.config";
import { getAllUsers } from "../../services/Database";

export default function UserList({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const data = await getAllUsers();
    console.log(data);
    setUsers(data);

    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>All Cosplayers</Text>
      <ActivityIndicator animating={isLoading} />
      <ScrollView style={{ marginBottom: 100 }}>
        {users.map((user, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Profile", user)}
          >
            <View style={styles.card}>
              <Image
                source={require("../../assets/images/user.png")}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={{ fontSize: 21 }}>{user.username}</Text>
                <Text>{user.role}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B83D7",
    flexDirection: "column",
  },
  headingText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.38)",
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
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
    height: 60,
    width: 60,
    borderRadius: 6,
    left: 0,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginStart: 20,
    color: "#F2F2F2",
  },
});
