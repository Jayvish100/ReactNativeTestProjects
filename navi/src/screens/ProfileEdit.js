import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, KeyboardAvoidingView } from 'react-native';

const ProfileEdit = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');


    var idfname, idemail, idnumber, idaddress1, idaddress2, idcity, idstate, idpincode;

    const checkFirstName = () => {
        if (firstName == '') {
            return idfname = 'Name cannot be empty';
        }
    }

    const checkEmail = () => {
        if (email == '') {
            return idemail = '\nEmail cannot be empty';
        }
    }

    const checkNumber = () => {
        if (number == '') {
            return idnumber = '\nPhone number cannot be empty';
        }
    }


    const checkAddress1 = () => {
        if (address1 == '') {
            return idaddress1 = '\nAddress Line 1 cannot be empty';
        }
    }

    const checkAddress2 = () => {
        if (address2 == '') {
            return idaddress2 = '\nAddress Line 2 cannot be empty';
        }
    }

    const checkCity = () => {
        if (city == '') {
            return idcity = '\nCity cannot be empty';
        }
    }

    const checkState = () => {
        if (state == '') {
            return idstate = '\nState cannot be empty';
        }
    }

    const checkPincode = () => {
        if (pincode == '') {
            return idpincode = '\nPincode cannot be empty';
        }
    }

    const alertArray = [checkFirstName(idfname), checkEmail(idemail), checkNumber(idnumber), checkAddress1(idaddress1), checkAddress2(idaddress2), checkCity(idcity), checkState(idstate), checkPincode(idpincode)];

    let alertArrayToString = alertArray.join("");

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fifthInput = useRef();
    const sixthInput = useRef();
    const seventhInput = useRef();
    const eightInput = useRef();


    const checkData = () => {
        if (alertArrayToString == '') {
            return (navigation.navigate('Detail'));
        } else return alert(`${alertArrayToString}`)
    }

    const reset = () => {
        (
            setFirstName({ value: '' }),
            setEmail({ value: '' }),
            setNumber({ value: '' }),
            setAddress1({ value: '' }),
            setAddress2({ value: '' }),
            setCity({ value: '' }),
            setState({ value: '' }),
            setPincode({ value: '' })
        )
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <TextInput style={styles.input}
                    autoFocus={true}
                    autoCapitalize='words'
                    placeholder="  Name"
                    onChangeText={(text) => { setFirstName(text) }}
                    ref={firstInput}
                    returnKeyType='next'
                    onSubmitEditing={() => { secondInput.current.focus() }}
                    blurOnSubmit={false}
                    value={firstName}
                />

                <TextInput style={styles.input}
                    placeholder="  Email"
                    keyboardType="email-address"
                    onChangeText={(text) => { setEmail(text) }}
                    ref={secondInput}
                    returnKeyType={'next'}
                    blurOnSubmit={false}
                    onSubmitEditing={() => { thirdInput.current.focus() }}
                    value={email}
                />

                <TextInput style={styles.input}
                    placeholder="  Phone No."
                    keyboardType='number-pad'
                    onChangeText={(text) => { setNumber(text) }}
                    ref={thirdInput}
                    returnKeyType={'next'}
                    blurOnSubmit={false}
                    onSubmitEditing={() => { fourthInput.current.focus() }}
                    value={number}
                />

                <TextInput style={styles.input}
                    placeholder="  Address Line 1"
                    textAlignVertical='top'
                    onChangeText={(text) => { setAddress1(text) }}
                    ref={fourthInput}
                    returnKeyType={'next'}
                    onSubmitEditing={() => { fifthInput.current.focus() }}
                    blurOnSubmit={false}
                    value={address1}
                />

                <TextInput style={styles.input}
                    placeholder="  Address Line 2"
                    textAlignVertical='top'
                    onChangeText={(text) => { setAddress2(text) }}
                    ref={fifthInput}
                    returnKeyType={'next'}
                    onSubmitEditing={() => { sixthInput.current.focus() }}
                    blurOnSubmit={false}
                    value={address2}
                />

                <TextInput style={styles.input}
                    placeholder="  City"
                    textAlignVertical='top'
                    onChangeText={(text) => { setCity(text) }}
                    ref={sixthInput}
                    returnKeyType={'next'}
                    onSubmitEditing={() => { seventhInput.current.focus() }}
                    blurOnSubmit={false}
                    value={city}
                />

                <TextInput style={styles.input}
                    placeholder="  State"
                    onChangeText={(text) => { setState(text) }}
                    ref={seventhInput}
                    returnKeyType={'next'}
                    blurOnSubmit={false}
                    onSubmitEditing={() => { eightInput.current.focus() }}
                    value={state}
                />

                <TextInput style={styles.input}
                    keyboardType='number-pad'
                    placeholder="  Pincode"
                    onChangeText={(text) => { setPincode(text) }}
                    ref={eightInput}
                    returnKeyType='done'
                    onSubmitEditing={() => checkData()}
                    value={pincode}
                    bo
                />


            </KeyboardAvoidingView>
            <TouchableOpacity
                style={styles.but1}
                onPress={() => checkData()}
            >
                <Text>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.but2}
                onPress={() => reset()}
            >
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 15,
        color: 'black',
        borderRadius: 5,
        marginBottom: 10
    },
    container: {
        marginVertical: 10
    },
    but1: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginHorizontal:50,
        marginVertical: 20,
        borderRadius: 50
    },
    but2: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginHorizontal:50,
        marginVertical: 20,
        borderRadius: 50
    },
    select:{
        borderColor: 'blue'
    }
});

export default ProfileEdit;