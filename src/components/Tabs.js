import React from "react";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import CurrentWeather from "../screens/CurrentWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: "tomato",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontsize: 25,
          color: "tomato",
        },
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
