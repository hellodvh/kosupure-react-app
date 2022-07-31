import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

import { getCompetitionCollectionListener } from "../../services/Database";
import { useFocusEffect } from "@react-navigation/native";
import { onSnapshot } from "firebase/firestore";
import { FAB } from "react-native-paper";

const CompList = ({ navigation }) => {
  const [competitions, setCompetitions] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const collectionRef = getCompetitionCollectionListener();
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        let competitionData = [];
        snapshot.forEach((doc) => {
          let competition = {
            ...doc.data(),
            id: doc.id,
          };
          competitionData.push(competition);
        });

        console.log(competitionData);
        setCompetitions(competitionData);
      });

      return () => {
        unsubscribe();
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Competition Container*/}
        <Text style={styles.headingText}>Available Competitions</Text>
        {/* Container */}
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 6,
          }}
        >
          {competitions.map((item, index) => (
            <View
              key={index}
              style={{
                width: 145,
                marginHorizontal: 10,
                marginVertical: 10,
                height: 165,
                borderRadius: 60,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("CompDetails", item)}
              >
                <ImageBackground
                  borderRadius={6}
                  source={{ uri: item.bannerImage }}
                  resizeMode={"cover"}
                  style={{ height: "100%", width: "100%" }}
                >
                  <Text style={styles.bannerText}>{item.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {/* Competiton Entires Container End */}
        {/* <Text style={styles.headingText}>Previous Competitions</Text> */}
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("CreateComp")}
      />
    </View>
  );
};

export default CompList;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 20,
    bottom: 150,
    backgroundColor: "#F25781",
  },
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
  bannerContainer: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 6,
    height: 200,
  },
  bannerImage: {
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    maxHeight: 200,
    borderRadius: 6,
  },
  bannerText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },
  accordionContainer: {
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
  saveButton: {
    backgroundColor: "#66D8F2",
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
});
