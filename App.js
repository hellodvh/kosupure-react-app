import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Appstyles from "./App.scss";

export default function App() {
  return (
    <View style={Appstyles.container}>
      <Text>Kosupure App!</Text>
      <StatusBar style="auto" />
    </View>
  );
  }