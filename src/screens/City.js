import React from "react";
import { Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        // eslint-disable-next-line no-undef
        source={require("../../assets/City.jpg")}
        style={styles.imageLayout}
      >
        <Text>London</Text>
        <Text>Uk</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
});

export default City;
