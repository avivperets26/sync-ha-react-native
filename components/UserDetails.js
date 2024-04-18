import React from "react";
import { View, Text } from "react-native";

function UserDetails({ route }) {
  const { name, interest } = route.params;
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Interest: {interest.length === 0 ? "none" : interest}</Text>
    </View>
  );
}

export default UserDetails;
