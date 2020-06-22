import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const colorsReducer = (state, action) => {
    // state === {red: 0, blue: 0, green: 0}
    // action === { type: 'red' || 'green' || 'blue', payload: 15 || -15}

    switch (action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload };
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload };
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}

const ColorsScreen = () => {
    const [state, dispatch] = useReducer(colorsReducer, { red: 0, blue: 0, green: 0 });

    const [colors, setColors] = useState([]);
    const getRandomColor = () => {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    const setNewColor = (newColor) => {
        if (colors.findIndex(color => color === newColor) === -1) {
            setColors([...colors, newColor]);
        }
    }

    return (
        <View>
            <ColorCounter onIncrease={() => { dispatch({ type: 'red', payload: COLOR_INCREMENT }) }} onDecrease={() => { dispatch(state, { type: 'red', payload: -1 * COLOR_INCREMENT }) }} color="Red" />
            <ColorCounter onIncrease={() => { dispatch({ type: 'green', payload: COLOR_INCREMENT }) }} onDecrease={() => { dispatch(state, { type: 'green', payload: -1 * COLOR_INCREMENT }) }} color="Green" />
            <ColorCounter onIncrease={() => { dispatch({ type: 'blue', payload: COLOR_INCREMENT }) }} onDecrease={() => { dispatch(state, { type: 'blue', payload: -1 * COLOR_INCREMENT }) }} color="Blue" />

            <View style={{ height: 100, width: 100, backgroundColor: 'rgb(' + state.red + ',' + state.green + ',' + state.blue + ')' }} />

            <Button title="Add Color" onPress={() => {
                setNewColor('rgb(' + state.red + ',' + state.green + ',' + state.blue + ')');
            }} />
            <Button title="Add Random Color" onPress={() => {
                setNewColor(getRandomColor());
            }} />
            <FlatList data={colors} keyExtractor={item => item} renderItem={({ item }) => {
                return <View style={{ height: 100, width: 100, backgroundColor: item }} />
            }} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ColorsScreen;