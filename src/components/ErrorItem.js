import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errormessage}>Sorry Something went wrong</Text>
      <Feather name={"frown"} size={100} color={"white"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  errormessage: {
    fontSize: 30,
    color: "white",
    marginHorizontal: 1,
    textAlign: "center",
  },
});

export default ErrrorItem;
