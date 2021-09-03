import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ShoppingListVertical = ({ title }) => {

    const resultsV = [
        {
            logo: <Image style={styles.logoSize} source={require('../../assets/images/BurgerKingLogo.png')} />,
            image: <Image style={styles.imageSize} source={require('../../assets/images/burger.jpg')} />,
            textLogo: "Redeem Now",
            text: <Text>We offer &#8377;50/- off on minimum order of &#8377;300/-</Text>,
            key: 'ce8c4e0e'
        },
        {
            logo: <Image style={styles.logoSize} source={require('../../assets/images/PizzaHutLogo.png')} />,
            image: <Image style={styles.imageSize} source={require('../../assets/images/pizza.png')} />,
            textLogo: "Redeem Now",
            text: <Text>We offer &#8377;50/- off on minimum order of &#8377;500/-</Text>,
            key: '3d04175f'
        },
        {
            logo: <Image style={styles.logoSize} source={require('../../assets/images/BigBazaarLogo.png')} />,
            image: <Image style={styles.imageSize} source={require('../../assets/images/BigBazaar.jpg')} />,
            textLogo: "Redeem Now",
            text: <Text>We offer &#8377;50/- off on minimum order of &#8377;500/-</Text>,
            key: '0ff2e8f7'
        }
    ]

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>

            <FlatList
                data={resultsV}
                keyExtractor={(resultV) => resultV.key}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.logoBox}>
                                <Text style={styles.textStyle}>{item.textLogo}</Text>
                                {item.logo}
                            </View>
                            <View style={styles.offerBox}>
                                <Text style={styles.offerStyle}>{item.text}</Text>
                                {item.image}
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#0009',
        marginHorizontal: 10,
        borderRadius: 10,
        width: 370
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10
    },
    logoSize: {
        height: 100,
        width: 100,
        bottom: 25
    },
    imageSize: {
        flex: 2,
        height: 150,
        width: 245,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    textStyle: {
        position: 'absolute',
        textAlign: 'center',
        height: 25,
        width: 120,
        color: '#5893f9',
        fontWeight: 'bold'
    },
    offerStyle: {
        flex: 2,
        position: 'absolute',
        elevation: 1,
        textAlign: 'center',
        backgroundColor: '#ddd9',
        height: 25,
        width: 245,
        height: 40,
        borderBottomRightRadius: 10
    },
    logoBox: {
        flex: 1,
        borderColor: '#ddd9',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 150,
        width: 100,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    offerBox: {
        flex: 2,
        borderColor: '#ddd9',
        borderWidth: 1,
        height: 150,
        width: 200,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    }
});



export default ShoppingListVertical;