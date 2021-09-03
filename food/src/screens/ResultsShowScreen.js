import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response =  await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    },[]);

    if ( !result ){
        return null;
    }

    return (
        <>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={ ({item}) => {
                return <Image style={styles.image} source={{ uri: item}} />
            }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 400,
        width: 600,
    },
    textStyle: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 5,
        backgroundColor: '#E0DDDD'
    }
});

export default ResultsShowScreen;