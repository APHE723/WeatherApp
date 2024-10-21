import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const DATA = [
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 933,
      humidity: 50,
      temp_kf: -1.9,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: {
      all: 97,
    },
    wind: {
      speed: 1.06,
      deg: 66,
      gust: 2.16,
    },
    visibility: 10000,
    pop: 0.32,
    rain: {
      "1h": 0.13,
    },
  },
];

const WeatherItem = ({ dt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text>Date: {new Date(dt * 1000).toLocaleDateString()}</Text>
      <Text>Condition: {condition}</Text>
      <Text>Min Temp: {min}°K</Text>
      <Text>Max Temp: {max}°K</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <WeatherItem
      condition={item.weather[0].main}
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default UpcomingWeather;
