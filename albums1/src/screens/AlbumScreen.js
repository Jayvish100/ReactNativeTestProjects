import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import jsonserver from '../api/jsonserver';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const AlbumScreen = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        try {
            const albumList = async () => {
                const response = await jsonserver.get('/albums');
                setResults(response.data)
            }
            return albumList;
        } catch (err) {
            alert(err);
        }
    }, []);

    return (
        <>
            <View style={styles.headerStyle}>
                <Text style={{ fontSize: 30}}>Albums</Text>
            </View>
            <FlatList
                data={results}
                keyExtractor={(album) => album.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1, marginVertical: 5 }}>
                            <View style={styles.albumHeader}>
                                <Image style={styles.thumbStyle} source={{ uri: item.thumbnail_image }} />
                                <View>
                                    <Text style={styles.textStyle}>{item.title}</Text>
                                    <Text style={styles.textStyle}>{item.artist}</Text>
                                </View>
                            </View>
                            <View>
                                <Image style={styles.albumArt} source={{ uri: item.image }} />
                            </View>
                            <View>
                                <TouchableOpacity style={styles.buttonStyle} onPress={() => { Linking.openURL(item.url) }} >
                                    <Text style={styles.textStyle}>Buy Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
        </>
    )
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#ededed',
        borderColor: '#000',
        borderWidth: 2,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        elevation: 20
    },
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        borderColor: '#000',
        borderWidth: 2,
    },
    thumbStyle: {
        margin: 10,
        height: 60,
        width: 60
    },
    albumHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 80
    },
    albumArt: {
        height: height * .560
    },
    buttonStyle: {
        height: 50,
        marginBottom: 10,
        borderColor: '#ededed',
        borderWidth: 1,
        backgroundColor: '#e54f6e',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AlbumScreen;