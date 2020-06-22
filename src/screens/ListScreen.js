import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 28 },
        { name: "Friend #2", age: 15 },
        { name: "Friend #3", age: 53 },
        { name: "Friend #4", age: 81 },
        { name: "Friend #5", age: 23 },
        { name: "Friend #6", age: 22 },
        { name: "Friend #7", age: 25 },
        { name: "Friend #8", age: 26 },
        { name: "Friend #9", age: 27 }
    ];

    return (
        <View>
            <Text style={styles.title}>List Screen</Text>
            <FlatList
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => {
                return <Text style={styles.listItemTitle}>{item.name} - Age {item.age}</Text>
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    },
    listItemTitle: {
        margin: 15
    }
});

export default ListScreen