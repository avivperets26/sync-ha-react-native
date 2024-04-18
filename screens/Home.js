import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UsersList from "../components/UserList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
});

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List:</Text>
      <UsersList />
    </View>
  );
}

export default Home;
