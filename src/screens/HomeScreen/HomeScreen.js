import React  from 'react';
import { useNavigation } from "@react-navigation/native";
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


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.container}>
        
    //   </View>
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
    <Text style={styles.heading}>Welcome</Text>
    {/* <ActivityIndicator animating={isLoading} /> */}
    <ScrollView style={{ marginBottom: 100 }}>
     
        <TouchableOpacity>
          <View style={styles.card}>
            <Image
            source={require("../../assets/images/KosupureImage.png")}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              
              
            </View>
          </View>
        </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5B83D7",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#e3e3e3",
    minWidth: "90%",
    height: 400,
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#b2b2b2",
    shadowColor: "#e3e3e3",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  cardImage: {
    height: 100,
    width: 300,
    borderRadius: 6,
    // left: 0,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: "center",
    alignContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginStart: 20,
    color: "#F2F2F2",
  },
});
