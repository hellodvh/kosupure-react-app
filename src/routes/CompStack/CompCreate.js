import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

import { auth, db } from "../../../firebase";
// import { newCompetition } from "../../services/Database";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase.config";

import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { collection, doc, setDoc } from "firebase/firestore";

const CompCreate = ({ navigation }) => {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [bannerImage, setBannerImage] = useState();

  const saveComp = async () => {
    await handleImageUpload();
  };

  const handleImageUpload = async () => {
    const imageRef = ref(storage, "images/" + title + ".jpg");
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
      xhr.open("GET", bannerImage, true);
      xhr.send(null);
    });

    await uploadBytes(imageRef, blob)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
            const newDocRef = doc(collection(db, "competitions"));
            setDoc(newDocRef, {
              title: title,
              category: category,
              description: description,
              bannerImage: url,
              userId: auth.currentUser.uid,
              id: newDocRef.id,
            });
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
      setBannerImage(result.uri);
    }
  };

  // Drop down picker
  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.headingText}>Create New Competition</Text>
        {/* New Competition Form */}
        <View style={styles.formContainer}>
          {/* Title Input */}
          <Text style={styles.formInputHeading}>Title</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Title"
            onChangeText={setTitle}
            value={title}
            placeholderTextColor="lightgrey"
          ></TextInput>

          {/* Category Input */}
          <Text style={styles.formInputHeading}>Category</Text>
          <View style={styles.formInputPicker}>
            <Picker
              mode={"dropdown"}
              ref={pickerRef}
              selectedValue={category}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            >
              <Picker.Item
                label="Please select a category..."
                value="null"
                style={{ fontSize: 18, color: "grey" }}
              />
              <Picker.Item
                label="Beginner"
                value="beginner"
                style={{ fontSize: 18 }}
              />
              <Picker.Item
                label="Novice"
                value="novice"
                style={{ fontSize: 18 }}
              />
              <Picker.Item label="Pro" value="pro" style={{ fontSize: 18 }} />
            </Picker>
          </View>

          {/* Description */}
          <Text style={styles.formInputHeading}>Description</Text>
          <TextInput
            style={styles.formInputDescription}
            onChangeText={setDescription}
            value={description}
            numberOfLines={8}
            multiline={true}
            placeholder="Description"
            placeholderTextColor="lightgrey"
          ></TextInput>

          {/* Requirments */}
          {/* Banner Image */}
          <Text style={styles.formInputHeading}>Banner Image</Text>
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.formInput}>Upload Image</Text>
          </TouchableOpacity>
        </View>
        {/* New Competition Form End */}
        {/* Buttons Container */}
        <View>
          <TouchableOpacity style={styles.saveButton} onPress={saveComp}>
            <Text style={styles.saveButtonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CompCreate;

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
