import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.CzHvEXPu}>{"Title"}</Text>
        <View style={styles.PHkqPzyl}></View>
        <TextInput style={styles.YDHOqima} placeholder="Search..." placeholderTextColor="#777777"></TextInput>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  CzHvEXPu: {
    width: 307,
    height: 22,
    lineHeight: 14,
    fontSize: 24,
    borderRadius: 0,
    position: "absolute",
    left: 15,
    top: 60,
    fontFamily: "Open Sans",
    fontWeight: "700"
  },
  PHkqPzyl: {
    height: 92,
    width: 140,
    backgroundColor: "#a30000",
    borderRadius: 4,
    color: "#777777",
    position: "absolute",
    left: 21,
    top: 95
  },
  YDHOqima: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 303,
    height: 34,
    position: "absolute",
    borderRadius: 4,
    padding: 12,
    left: 19,
    top: 13
  }
});
export default Untitled5;