import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {

    if(!results.length){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail
                                result={item}
                            />
                        </TouchableOpacity>
                    );
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 35,
        fontWeight: 'bold'
    },
    container: {
        marginBottom: 15
    }
});

export default withNavigation(ResultsList);