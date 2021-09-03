import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Button, ScrollView } from 'react-native';

const App = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');


  var idfname, idlname, idage, idemail, idaddress, idstate, idcountry, text1;

  const checkFirstName = () => {
    if (firstName == '') {
      return idfname = 'First Name cannot be empty';
    }
  }

  const checkLastName = () => {
    if (lastName == '') {
      return idlname = '\nLast Name cannot be empty';
    }
  }

  const checkAge = () => {
    if (age == '') {
      return idage = '\nAge cannot be empty';
    }
  }

  const checkEmail = () => {
    if (email == '') {
      return idemail = '\nEmail cannot be empty';
    }
  }

  const checkAddress = () => {
    if (address == '') {
      return idaddress = '\nAddress cannot be empty';
    }
  }

  const checkState = () => {
    if (state == '') {
      return idstate = '\nState cannot be empty';
    }
  }

  const checkCountry = () => {
    if (country == '') {
      return idcountry = '\nCountry cannot be empty';
    }
  }

  const alertArray = [checkFirstName(idfname), checkLastName(idlname), checkAge(idage), checkEmail(idemail), checkAddress(idaddress), checkState(idstate), checkCountry(idcountry)];

  let alertArrayToString = alertArray.join("");

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const seventhInput = useRef();


  const checkData = () => {
    if (alertArrayToString == '') {
      return null;
    } else return alert(`${alertArrayToString}`)
  }

  const reset = () => {
    {
      setFirstName({ value: '' }),
      setLastName({ value: '' }),
      setAge({ value: '' }),
      setEmail({ value: '' }),
      setAddress({ value: '' }),
      setState({ value: '' }),
      setCountry({ value: '' })
    }

  }

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
        value={firstName}
      />

      <TextInput style={styles.input}
        autoCapitalize='words'
        placeholder="Enter Last Name"
        returnKeyType={'next'}
        onChangeText={(text) => { setLastName(text) }}
        ref={secondInput}
        onSubmitEditing={() => { thirdInput.current.focus() }}
        blurOnSubmit={false}
        value={lastName}
      />

      <TextInput style={styles.input}
        placeholder="Enter age"
        keyboardType='number-pad'
        onChangeText={(text) => { setAge(text) }}
        ref={thirdInput}
        returnKeyType={'next'}
        onSubmitEditing={() => { fourthInput.current.focus() }}
        blurOnSubmit={false}
        value={age}
      />

      <TextInput style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        onChangeText={(text) => { setEmail(text) }}
        ref={fourthInput}
        returnKeyType={'next'}
        blurOnSubmit={false}
        onSubmitEditing={() => { fifthInput.current.focus() }}
        value={email}
      />

      <TextInput style={styles.input}
        multiline={true}
        placeholder="Enter Address"
        textAlignVertical='top'
        onChangeText={(text) => { setAddress(text) }}
        ref={fifthInput}
        returnKeyType={'next'}
        onSubmitEditing={() => { sixthInput.current.focus() }}
        blurOnSubmit={true}
        value={address}
      />

      <TextInput style={styles.input}
        placeholder="Enter State"
        onChangeText={(text) => { setState(text) }}
        ref={sixthInput}
        returnKeyType={'next'}
        blurOnSubmit={false}
        onSubmitEditing={() => { seventhInput.current.focus() }}
        value={state}
      />

      <TextInput style={styles.input}
        placeholder="Enter Country"
        onChangeText={(text) => { setCountry(text) }}
        ref={seventhInput}
        returnKeyType='done'
        onSubmitEditing={() => checkData()}
        value={country}
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

};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    color: 'black'
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    marginVertical: 20
  },
  container: {
    alignSelf: 'flex-end'
  }
});

export default App;