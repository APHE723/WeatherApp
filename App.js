import React from "react";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import CurrentWeather from "./src/screens/CurrentWeather";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: "tomato",
          tabBarActiveTintColor: "grey",
        }}
      >
        <Tab.Screen
          name="Current"
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="droplet"
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen name="Upcoming" component={UpcomingWeather} />
        <Tab.Screen name="City" component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
