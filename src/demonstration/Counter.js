import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";

const Counter = () => {
  let count = 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count: ${count}`}</Text>
      <Button
        color="red"
        title="Increase the count"
        onPress={() => count + 1}
      />
      <Button
        color="green"
        title="Decrease the count"
        onPress={() => count - 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ImageBackground: "orange",
  },
  title: {
    alignSelf: "center",
    fontsize: 25,
    marginTop: 25,
  },
});

export default Counter;
