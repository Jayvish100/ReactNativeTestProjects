import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text>{result.rating} stars, {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 8,
        marginBottom: 5
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ResultsDetail;