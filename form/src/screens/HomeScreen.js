import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import InputComponent from '../components/InputComponent';
import DetailsScreen from './DetailsScreen';

const HomeScreen = ({ navigation, values }) => {

    const [result, setResult] = useState('');

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Home Screen</Text>
            <InputComponent
                id='Name'
                title="Enter Name"
            />
            <InputComponent
                id='Age'
                result={result}
                title="Enter Age"
            />
            <InputComponent
                id='Phone'
                result={result}
                title="Enter Phone Number"
            />
            <InputComponent
                id='Email'
                result={result}
                title="Enter E-mail"
            />

            <Button
                style={styles.buttonStyle}
                title="Submit"
                onPress={ setResult => values}
            />
            <View>
                <Text> Name : {values}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonStyle: {
        justifyContent: 'flex-end',
        borderColor: 'black'
    }
});

export default HomeScreen;