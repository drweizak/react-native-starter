import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { ...state, counter: state.counter + action.payload };
        case 'decrease':
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
}

const CounterScreen = props => {
    const [counterState, counterDisptach] = useReducer(counterReducer, { counter: 0 });

    return (
        <View>
            <Button title="Increase" onPress={() => {
                counterDisptach({ type: 'increase', payload: 1 });
            }} />
            <Button title="Decrease" onPress={() => {
                counterDisptach({ type: 'decrease', payload: 1 });
            }} />
            <Text>Current Count:</Text>
            <Text>{counterState.counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CounterScreen;