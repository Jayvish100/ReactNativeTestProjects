import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const InputComponent = ({ title, navigation, setResult, id }) => {

    const [ values, setValue ] = useState('');

    return (
        <View>
            <Text style={styles.textStyle}>{title}</Text>
            <TextInput
                style={styles.inputStyle}
                value={values}
                onChangeText={(text) => setValue(text)}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    inputStyle: {
        borderWidth: 1,
        width: 300,
        color: 'black'
    },
    textStyle: {
        fontSize: 16,
        alignSelf: 'center',
        marginVertical: 10
    }
});

export default InputComponent;