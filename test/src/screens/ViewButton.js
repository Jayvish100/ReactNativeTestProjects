import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const ViewButton = ({ values,onSubmit, onReset})=> {

    return <View style={styles.container}>
        <Button
        title={`Submit`}
        onPress={() => onSubmit()}
      />
      <Button
        title={`Reset`}
        onPress={() => onReset()}
      />
    </View>
};

const styles = StyleSheet.create({
    container:{
        alignSelf: 'flex-end'
    }
});

export default ViewButton;