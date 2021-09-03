import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.conatiner}>
            <Text style={styles.head}>HomeScreen</Text>
            <View style={styles.button}>


                <TouchableOpacity
                style={styles.touch}
                onPress={() => navigation.navigate('Profile')}
                ><Text style={styles.text}>Edit Profile</Text>
                </TouchableOpacity>
                

                <TouchableOpacity
                style={styles.touch}
                onPress={() => navigation.navigate('Detail')}
                ><Text style={styles.text}>Go to Details</Text>
                </TouchableOpacity>


                <TouchableOpacity
                style={styles.touch}
                onPress={() => navigation.navigate('Shop')}
                ><Text style={styles.text}>Store</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center',
    },
    head: {
        fontSize: 40,
        fontFamily: 'LemonJelly',
        alignSelf: 'center'
    },
    button: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    touch: {
        backgroundColor: "#ddd",
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 50,
    },
    text: {
        color: 'black'
    }
});

export default HomeScreen;