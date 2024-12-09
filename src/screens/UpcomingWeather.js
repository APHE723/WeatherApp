import React from "react";
import { StyleSheet, FlatList, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ListItem from "../components/ListItem";

const UpcomingWeather = (weatherData) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        // eslint-disable-next-line no-undef
        source={require("../../assets/cloud.jpg")}
        style={image}
        resizeMode="cover"
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt.toString()}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
  },
  details: {
    marginLeft: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    flex: 1,
    marginTop: -34,
  },
});

export default UpcomingWeather;
