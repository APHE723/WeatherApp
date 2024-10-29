import React from "react";
import { View, StyleSheet } from "react-native";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import CurrentWeather from "./src/screens/CurrentWeather";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator

  const Tab = createBottomTabNavigator ()

 } from "@react-navigation/bottom-tabs";

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <View style={styles.container}>
        <City />
      </View>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
