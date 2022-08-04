import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import { List, Chip } from "react-native-paper";

import { getEntryOfCompetition } from "../../services/Database";

export default function CompDetails({ route, navigation }) {
  const params = route.params;

  const [entries, setEntries] = useState([]);
  // const entriesCollectionRef = collection(db, "entries");
  // const updateVoteCount = async (id, votes) => {
  //   const entriesDoc = doc(db, "entries", id);
  //   const newVoteCount = { votes: votes + 1 };
  //   await updateDoc(entriesDoc, newVoteCount);
  // };
  useEffect(() => {
    getEntrySubCollection();
  });
  const getEntrySubCollection = async () => {
    setEntries(await getEntryOfCompetition(params.id));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.headingText}>Competition Details</Text>

        {/* Banner Container */}
        {/* <View style={styles.bannerContainer}>
          <Image
            source={{ uri: params.bannerImage }}
            resizeMode={"cover"}
            style={styles.bannerImage}
          />
        </View> */}

        {/* Header Container */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerHeading}>{params.title}</Text>
          <Text style={styles.headerSubheading}>{params.category}</Text>
        </View>

        {/* Accordion Container */}
        <View style={styles.accordionContainer}>
          <List.AccordionGroup>
            <List.Accordion
              title="Description"
              id="1"
              style={{ backgroundColor: "transparent" }}
              titleStyle={{
                fontSize: 16,
                fontFamily: "Rubik_500Medium",
                fontWeight: "500",
                backgroundColor: "transparent",
              }}
            >
              <List.Item
                description={params.description}
                descriptionStyle={{
                  fontSize: 16,
                  fontFamily: "Rubik_500Medium",
                  fontWeight: "500",
                  color: "#FFFFFF",
                }}
                descriptionNumberOfLines={10}
              />
            </List.Accordion>
          </List.AccordionGroup>
        </View>
        {/* New Competition Form End */}
        {/* Buttons Container */}
        <View>
          <TouchableOpacity
            style={styles.enterButton}
            onPress={() => navigation.navigate("CompEntry", params.id)}
          >
            <Text style={styles.enterButtonText}>Enter Comp!</Text>
          </TouchableOpacity>
        </View>
        {/* Buttons Container End */}
        {/* Competition Entries Container*/}
        <Text style={styles.headingText}>Competition Entries</Text>
        
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            left: 0,
            right: 0,
            alignItems: "center",
            justifyContent: "flex-start",
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 6,
            marginVertical: 5,
          }}
        >
          {entries.map((item, index) => (
            <View
              key={index}
              style={{
                width: 145,
                marginHorizontal: 10,
                marginVertical: 10,
                height: 165,
                width: "100%",
                borderRadius: 60,
                alignItems: "center",
              }}
            >
              {/* <TouchableOpacity> */}
              <ImageBackground
                borderRadius={6}
                source={{ uri: item.entryImage }}
                resizeMode={"cover"}
                style={{ height: "100%", maxWidth: "98%", width: "100%", borderRadius: 6,  paddingRight: 20 }}
              >
                <Text style={styles.title}>{item.title}</Text>
                {/* <Text>{item.category}</Text> */}
                {/* <Text style={styles.votesText}>{item.votes}</Text> */}
                {/* <Button title="Vote"></Button> */}
                {/* React Native Paper Chip component */}
                {/* <Chip
                  style={styles.votesChip}
                  mode="flat"
                  numberOfLines={1}
                  icon="vote"
                  color="#fff"
                  onPress={() => {
                    updateVoteCount(entries.id, entries.votes);
                  }}
                >
                  Vote
                </Chip> */}
              </ImageBackground>

              {/* </TouchableOpacity> */}
            </View>
          ))}
        </View>
        
        {/* Competiton Entires Container End */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  headerHeading: {
    color: "#FFFFFF",
    fontSize: 26,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
    marginTop: 20,
  },
  headerSubheading: {
    color: "#66D8F2",
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",

  },

  headingText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.38)",
    alignSelf: "center",
  },

  // bannerContainer: {
  //   borderColor: "lightgrey",
  //   borderWidth: 1,
  //   borderRadius: 6,
  //   height: 200,
  // },
  // bannerImage: {
  //   alignSelf: "center",
  //   justifyContent: "center",
  //   width: "100%",
  //   maxHeight: 200,
  //   borderRadius: 6,
  // },
  accordionContainer: {
    width: "100%",
    marginTop: 20,
  },
  // accordionTitle: {
  //   fontSize: 16,
  //   fontFamily: "Rubik_500Medium",
  //   fontWeight: "500",
  //   borderRadius: 6,
  // },
  // accordionDescription: {
  //   fontSize: 16,
  //   fontFamily: "Rubik_500Medium",
  //   fontWeight: "500",
  //   color: "White",
  // },

  formInputHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 2,
    color: "rgba(0, 0, 0, 0.38)",
  },
  enterButton: {
    backgroundColor: "#F1E088",
    width: 260,
    height: 50,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 35,
    marginTop: 35,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    bottom: 5,
  },
  enterButtonText: {
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
  },

  //Entries
  title: {
    color: "#FFFFFF",
    padding: 10,
    bottom:0,
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
    fontWeight: "500",
  },
  votesText: {
    color: "#FFED92",
    fontSize: 28,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontWeight: "bolder",
    fontStyle: "italic",
  },
  votesChip: {
    backgroundColor: "#fff",
    width: "60%",
    color: "#fff",
    justifyContent: "center",
    alignSelf: "center",
  },
});
