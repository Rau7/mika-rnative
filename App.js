import { StyleSheet, Text, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  box: {
    height: "100%",
    width: "100%",
    borderWidth: 5,
    borderStyle: "dotted",
    borderColor: "#990000",
    backgroundColor: "#000",
    borderRadius: 30,
  },
});
