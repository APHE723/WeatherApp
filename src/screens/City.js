import React from "react";
import moment from "moment";
import {
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import IconText from "../components/IconText";

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    imageLayout,
  } = styles;

  const {
    name = "Unknown City",
    country = "Unknown Country",
    population = "N/A",
    sunrise = 0,
    sunset = 0,
  } = weatherData;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/City.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>

        <View style={[populationWrapper, styles.rowLayout]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            bodyText={moment(sunrise * 1000).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="white"
            bodyText={moment(sunset * 1000).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
    marginTop: -34,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
