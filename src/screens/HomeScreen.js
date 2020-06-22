import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Components Screen"
        onPress={() => navigation.navigate('Components')} />
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate('List')} />
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')} />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')} />
      <Button
        title="Go to Colors Screen"
        onPress={() => navigation.navigate('Colors')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30
  }
});

export default HomeScreen;
