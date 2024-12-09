import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { WeatherType } from "../utilities/weatherType";

const ListItem = (props) => {
  const { item, date, details, temp } = styles;

  return (
    <View style={item}>
      <Feather name={WeatherType[condition].icon} size={50} color="white" />
      <View style={details}>
        <Text style={date}>
          Date: {new Date(props.dt * 1000).toLocaleDateString()}
        </Text>
        <Text>Condition: {props.condition}</Text>
        <Text style={temp}>{"${Math.round(min)}˚/${Math.round(max)}˚ "} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "pink",
  },
  details: {
    marginLeft: 20,
  },
  temp: {
    color: "white",
    fontSize: 18,
  },
  date: {
    color: "white",
    fontSize: 15,
    marginBottom: 5,
  },
});

export default ListItem;
