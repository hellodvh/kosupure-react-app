import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addEntryToCompetition } from "../../services/Database";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../config/firebase.config";

export default function CompEntry({ route, navigation }) {
  const id = route.params;
  const [title, onChangeTitle] = useState();
  // const [description, onChangeDescription] = useState();
  const [entryImage, setEntryImage] = useState("/");
  //votes
  // const [votes, setVotes] = useState(0);
  const addEntry = async () => {
    await handleImageUpload();
  };

  //image picker and upload
  const handleImageUpload = async () => {
    const imageRef = ref(storage, "images/" + title + id + ".jpg");

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", entryImage, true);
      xhr.send(null);
    });
    await uploadBytes(imageRef, blob)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
            addEntryToCompetition({ title: title, entryImage: url }, id);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    blob.close();
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setEntryImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.headingText}>New Entry</Text>
        {/* New Competition Form */}
        <View style={styles.formContainer}>
          {/* Title Input */}
          <Text style={styles.formInputHeading}>Title</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Title"
            onChangeText={onChangeTitle}
            value={title}
            placeholderTextColor="lightgrey"
          ></TextInput>
          {/* Description */}
          {/* <Text style={styles.formInputHeading}>Description</Text>
          <TextInput
            style={styles.formInputDescription}
            onChangeText={onChangeDescription}
            value={description}
            numberOfLines={8}
            multiline={true}
            placeholder="Description"
            placeholderTextColor="lightgrey"
          ></TextInput> */}
          {/* <Text value={votes} onChangeText={setVotes}></Text> */}
          {/* Cosplay Image */}
          <Text style={styles.formInputHeading}>Add Image</Text>
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.formInput}>Upload Image</Text>
          </TouchableOpacity>
        </View>
        {/* New Competition Form End */}
        {/* Buttons Container */}
        <View>
          <TouchableOpacity style={styles.saveButton} onPress={addEntry}>
            <Text style={styles.saveButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  formInputDescription: {
    width: "100%",
    height: 150,
    textAlignVertical: "top",
    backgroundColor: "#f2f2f2f2",
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 35,
    padding: 10,
    fontSize: 18,
  },
  formInputRules: {
    width: "100%",
    height: 150,
    textAlignVertical: "top",
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
});
