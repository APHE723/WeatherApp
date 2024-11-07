import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{`Count: ${count}`}</Text>
      <Button
        color="red"
        title="Increase the count"
        onPress={() => setCount(count + 1)}
      />
      <Button
        color="green"
        title="Decrease the count"
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
};

export default Counter;
