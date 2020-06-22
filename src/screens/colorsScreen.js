import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const ColorsScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const [colors, setColors] = useState([]);
    const getRandomColor = () => {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15

        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    const setNewColor = (newColor) => {
        if (colors.findIndex(color => color === newColor) === -1) {
            setColors([...colors, newColor]);
        }
    }

    return (
        <View>
            <ColorCounter onIncrease={() => setColor('red', COLOR_INCREMENT)} onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} color="Red" />
            <ColorCounter onIncrease={() => setColor('green', COLOR_INCREMENT)} onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} color="Green" />
            <ColorCounter onIncrease={() => setColor('blue', COLOR_INCREMENT)} onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} color="Blue" />

            <View style={{ height: 100, width: 100, backgroundColor: 'rgb(' + red + ',' + green + ',' + blue + ')' }} />

            <Button title="Add Color" onPress={() => {
                setNewColor('rgb(' + red + ',' + green + ',' + blue + ')');
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