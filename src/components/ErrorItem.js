import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrrorItem = () => {
  return (
    <View>
      <Text>Sorry Something went wrong</Text>
      <Feather name={"frown"} size={100} color={"white"} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ErrrorItem;
