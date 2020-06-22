import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = "Andre";

    return (
        <View>
            <Text style={styles.firstText}>Getting started with react native!</Text>
            <Text style={styles.secondText}>My name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    firstText: {
        fontSize: 45
    },
    secondText: {
        fontSize: 20
    }
});

export default ComponentsScreen;