import React from "react";
import { View, StyleSheet } from "react-native";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import CurrentWeather from "./src/screens/CurrentWeather";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <City />
      </View>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
