import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ProfileEdit from './ProfileEdit';

const ProfileDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Screen 1 </Text>
            <Button 
            title="Goto to Screen 2"
            onPress={() => navigation.navigate('Screen2')}
            />
            <Button 
            title="Go Back"
            onPress={()=> navigation.goBack()}
            />
            <Button 
            title="Goto Home"
            onPress={()=> navigation.popToTop()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProfileDetail;