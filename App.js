import React from "react";
import { View, StyleSheet } from "react-native";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import CurrentWeather from "./src/screens/CurrentWeather";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <View style={styles.container}>
          <Tab.Screen name={"Current"} component={CurrentWeather} />
          <Tab.Screen name={"Upcoming"} component={UpcomingWeather} />
          <Tab.Screen name={"City"} component={City} />
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
