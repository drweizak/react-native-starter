import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.exerciseViewStyle}>
                <Text style={{...styles.exerciseBoxStyle, backgroundColor: 'red', borderColor: 'red' }}>Box #1</Text>
                <Text style={{...styles.exerciseBoxStyle, backgroundColor: 'green', borderColor: 'green', top:  50 }}>Box #2</Text>
                <Text style={{...styles.exerciseBoxStyle, backgroundColor: 'purple', borderColor: 'purple' }}>Box #3</Text>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Box #1</Text>
                <Text style={{ ...styles.textStyle, flex: 2, alignSelf: 'center' }}>Box #2</Text>
                <Text style={styles.textStyle}>Box #3</Text>
            </View>
            <View style={styles.viewPositionStyle}>
                <Text style={styles.relativeStyle}>Box #1</Text>
                <Text style={styles.absoluteStyle}>Box #2</Text>
                <Text style={styles.textStyle}>Box #3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    exerciseViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    exerciseBoxStyle: {
        width: 50,
        height: 50
    },
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'stretch',
        flexDirection: 'row',
        height: 300
    },
    textStyle: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'red'
    },
    viewPositionStyle: {
        height: 300,
        borderWidth: 3,
        borderColor: 'black',
        position: 'relative'
    },
    relativeStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        position: 'relative',
        bottom: 20
    },
    absoluteStyle: {
        borderWidth: 3,
        borderColor: 'green',
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        zIndex: 1
    }
});

export default BoxScreen;