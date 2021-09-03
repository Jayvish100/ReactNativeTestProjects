import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ShoppingListVertical from '../components/ShoppingListVertical';
import ShoppingListHorizontal from '../components/ShoppingListHorizontal';

const ShoppingScreen = () => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.screenTitle}>Shopping Screen</Text>
                <ShoppingListHorizontal title="Horizontal" />
            <ScrollView horizontal={true}>
                <ShoppingListVertical title="Vertical" />
            </ScrollView>
        </ScrollView>
    )
};



const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10
    }
});


export default ShoppingScreen;