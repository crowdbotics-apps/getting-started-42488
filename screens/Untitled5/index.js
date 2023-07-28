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
        <TextInput style={styles.YDHOqima} placeholder="Search..." placeholderTextColor="#777777" inlineImageLeft="Hi" inlineImagePadding={12} numberOfLines={1} clearTextOnFocus={true}></TextInput>
      </ScrollView>
    <View></View></SafeAreaView>;
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
    left: 16,
    top: 26,
    fontFamily: "Open Sans",
    fontWeight: "700"
  },
  PHkqPzyl: {
    height: 92,
    width: 140,
    backgroundColor: "#878787",
    borderRadius: 4,
    color: "#777777",
    position: "absolute",
    left: 20,
    top: 112
  },
  YDHOqima: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 303,
    height: 34,
    position: "absolute",
    borderRadius: 4,
    padding: 12,
    left: 22,
    top: 61
  }
});
export default Untitled5;