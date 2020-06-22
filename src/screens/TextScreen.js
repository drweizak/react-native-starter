import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newName) => { setName(newName) }}
            />
            <Text>My name is: {name}</Text>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newName) => { setPassword(newName) }}
            />
            {password.length <= 5 ? <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen