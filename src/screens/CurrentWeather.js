import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  // eslint-disable-next-line no-empty-pattern
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

  const WeatherCondition

  return (
    <SafeAreaView style={wrapper}>
      <View style={Container}>
        <Ionicons name="sunny-outline" size={100} color="black" />
        <Text style={tempStyles}>6</Text>
        <Text style={feels}>Feels like 5</Text>

        <RowText
          messageOne={"High: 8"}
          messageTwo={"Low: 6"}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={"It’s Sunny"}
        messageTwo={WeatherType["Clear"].message}
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
