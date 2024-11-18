import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    Container,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const WeatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: WeatherType[WeatherCondition]?.backgroundColor },
      ]}
    >
      <View style={Container}>
        <Ionicons
          name={WeatherType[WeatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{temp}°C</Text>
        <Text style={feels}>{`Feels like: ${feels_like}°C`}</Text>

        <RowText
          messageOne={`High: ${temp_max}°C`}
          messageTwo={`Low: ${temp_min}°C`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={WeatherType[WeatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  Container: {
    flex: 1,
    backgroundColor: "pink",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    fontSize: 20,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
