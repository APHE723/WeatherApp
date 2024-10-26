import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const City = () => {
  return (
    <SafeAreaView>
      <Text>City</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default City;
