import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import RowText from "../components/RowText";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Ionicons name="sunny-outline" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>

        <RowText
          messageOne={"High: 8"}
          messsageTwo={"Low: 6"}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messsageTwoStyles={styles.highLow}
        />
        <Text style={styles.highLow}>High: 8 </Text>
        <Text style={styles.highLow}>Low: 6</Text>
      </View>
      <RowText
        messageOne={"It Sunny"}
        messsageTwo={"It's perfect t-shirt weather"}
        containerStyles={styles.bodyWrapper}
        messageOneStyles={styles.description}
        messsageTwoStyles={styles.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "pink",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    fontSize: 20,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
