import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { fetchUsers } from "../api/apiService";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    width: "100%",
  },
  listItemText: {
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  errorText: {
    color: "red",
  },
});

function UsersList() {
  const navigation = useNavigation();
  const { data, error, isLoading } = useQuery("users", fetchUsers);

  console.log("Received data:", data); // L

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>An error occurred: {error.message}</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    if (!item || !item.name) {
      return null;
    }

    return (
      <TouchableOpacity
        style={styles.listItem}
        key={item._id}
        onPress={() => navigation.navigate("Details", { user: item })}
      >
        <Text style={styles.listItemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  console.log(data);
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id.toString()}
    />
  );
}

export default UsersList;
