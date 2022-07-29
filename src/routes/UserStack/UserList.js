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
    <SafeAreaView>
      <Text style={styles.heading}>All Cosplayers</Text>
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
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginStart: 20,
    color: "darkblue",
  },
});
