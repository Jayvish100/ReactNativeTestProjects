import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ShoppingListHorizontal = ({ title }) => {

    const results = [
        {
            image: <Image style={styles.imageSize} source={require('../../assets/images/Food_Beverage.jpg')} />,
            text: "Foods & Beverages",
            key: '8a533afa'
        },
        {
            image: <Image style={styles.imageSize} source={require('../../assets/images/lifestyle.jpg')} />,
            text: "LifeStyle",
            key: '8fa0056c'
        },
        {
            image: <Image style={styles.imageSize} source={require('../../assets/images/automobile.jpg')} />,
            text: "Automobile",
            key: '3ecc3a24'
        }
    ]

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.key}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={styles.textStyle}>{item.text}</Text>
                            {item.image}
                        </View>
                    )
                }}
            />
        </View>
    )
};



const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10
    },
    imageSize: {
        height: 150,
        width: 250,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10
    },
    textStyle: {
        position: 'absolute',
        elevation: 1,
        textAlign: 'center',
        backgroundColor: '#ddd9',
        height: 25,
        width: 250,
        left: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});



export default ShoppingListHorizontal;