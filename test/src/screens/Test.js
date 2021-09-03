import  React, {Component}  from "react";
import { StyleSheet, Text, TextInput, Button, ScrollView } from 'react-native';


class App extends Component {

    constructor(props){
        super(props);
        
    }


    render() {
        return (
            <ScrollView>
                <Text style={styles.text}>SIMPLE FORM</Text>

                <TextInput style={styles.input}
                    autoFocus={true}
                    autoCapitalize='words'
                    placeholder="Enter First Name"
                    onChangeText={(text) => { setFirstName(text) }}
                    ref={firstInput}
                    returnKeyType='next'
                    onSubmitEditing={() => { secondInput.current.focus() }}
                    blurOnSubmit={false}
                />

                <TextInput style={styles.input}
                    autoCapitalize='words'
                    placeholder="Enter Last Name"
                    returnKeyType={'next'}
                    onChangeText={(text) => { setLastName(text) }}
                    ref={secondInput}
                    onSubmitEditing={() => { thirdInput.current.focus() }}
                    blurOnSubmit={false}
                />

                <TextInput style={styles.input}
                    placeholder="Enter age"
                    keyboardType='number-pad'
                    onChangeText={(text) => { setAge(text) }}
                    ref={thirdInput}
                    returnKeyType={'next'}
                    onSubmitEditing={() => { fourthInput.current.focus() }}
                    blurOnSubmit={false}
                />

                <TextInput style={styles.input}
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    onChangeText={(text) => { setEmail(text) }}
                    ref={fourthInput}
                    returnKeyType={'next'}
                    blurOnSubmit={false}
                    onSubmitEditing={() => { fifthInput.current.focus() }}
                />

                <TextInput style={styles.input}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Enter Address"
                    textAlignVertical='top'
                    onChangeText={(text) => { setAddress(text) }}
                    ref={fifthInput}
                    returnKeyType={'next'}
                    onSubmitEditing={() => { sixthInput.current.focus() }}
                    blurOnSubmit={true}
                />

                <TextInput style={styles.input}
                    placeholder="Enter State"
                    onChangeText={(text) => { setState(text) }}
                    ref={sixthInput}
                    returnKeyType={'next'}
                    blurOnSubmit={false}
                    onSubmitEditing={() => { seventhInput.current.focus() }}
                />

                <TextInput style={styles.input}
                    placeholder="Enter Country"
                    onChangeText={(text) => { setCountry(text) }}
                    ref={seventhInput}
                    returnKeyType='done'
                    onSubmitEditing={() => checkData()}
                />

                <Button
                    title={`Submit`}
                    onPress={() => checkData()}
                />

                <Button
                    title={`Reset`}
                    onPress={() => reset()}
                    color='red'
                />
            </ScrollView>
        );
    }
}


export default App;