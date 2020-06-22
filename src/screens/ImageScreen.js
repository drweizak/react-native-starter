import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { FlatList } from 'react-native-gesture-handler';

const ImageScreen = props => {
    const images = [
        {
            image: require('../../assets/beach.jpg'),
            title: 'Beach',
            score: 9
        },
        {
            image: require('../../assets/forest.jpg'),
            title: 'Forest',
            score: 7
        },
        {
            image: require('../../assets/mountain.jpg'),
            title: 'Mountain',
            score: 4
        }
    ];
    return (
        <View>
            <FlatList data={images} keyExtractor={image => image.title} renderItem={({ item }) => {
                return <ImageDetail image={item.image} title={item.title} score={item.score} />
            }} ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;