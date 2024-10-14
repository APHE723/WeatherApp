import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "pink",
    padding: 10,
    alignItems: "center",
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
});

export default App;
