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
              titleStyle={{ fontWeight: "bold", fontSize: 26, color: "gray" }}
            >
              <List.Item
                description={params.description}
                descriptionStyle={{ fontSize: 22, color: "gray" }}
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
            alignItems: "center",
            justifyContent: "flex-start",
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 6,
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
                borderRadius: 60,
              }}
            >
              {/* <TouchableOpacity> */}
              <ImageBackground
                borderRadius={6}
                source={{ uri: item.entryImage }}
                resizeMode={"cover"}
                style={{ height: "100%", width: "100%" }}
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
    backgroundColor: "#F0F2F5",
    flex: 1,
    flexDirection: "column",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  headerHeading: {
    fontSize: 26,
    fontWeight: "bold",
  },
  headerSubheading: {
    fontSize: 22,
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
  enterButton: {
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
  enterButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },

  //Entries
  title: {
    color: "#6CE0FB",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
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
