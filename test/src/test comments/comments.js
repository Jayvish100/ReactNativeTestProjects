// // const check = () => {
//   //   console.log('hi')
//   //   if(name.length==0){
//   //     return alert("Name cannot be empty")
//   //   }

// import App from "./App";

//   //   if(age.length==0){
//   //     return alert("age cannot be empty")
//   //   }

//   //   if(number.length==0){
//   //     return alert("number cannot be empty")
//   //   }

//   //   if(email.length==0){
//   //     return alert("email cannot be empty")
//   //   }

//   // }



//   // switch (value) {
//   //   case 'name':
//   //     return name.length < 3 ? alert('name must be greater than 3 character') : alert(`Your Name is ${name}`);
//   //   case 'age':
//   //     return age.length > 2 ? alert('Invalid Age') : alert(`Your Age is ${age}`);
//   //   case 'number':
//   //     return number.length != 10 ? alert(`number must be 10 character`) : alert(`Your Number is ${number}`);
//   //   case 'email':
//   //     return email.length < 4 ? alert('email must be greater than 4 character') : alert(`Your Email is ${email}`);
//   //   default: ''
//   // }

//   // switch (value){
//   //   case (value.length == 0):
//   //     return alert(`${value} fields cannot be empty.`);
//   // }
//   //  {
//   // } else 

//   // } else if (number.length == 0){
//   //   return alert(`Number fields cannot be empty.`);
//   // } else if (email.length == 0){
//   //   return alert(`Email   fields cannot be empty.`);
//   // }
//   // console.log(props)
//   // if (props.values == 0) {
//   //   switch (values) {
//   //     case name.length == 0: return alert(`${props.values} fields cannot be empty.`)

//   //     case age.length == 0: return alert(`${props.values} fields cannot be empty.`)

//   //     case number.length == 0: return alert(`${props.values} fields cannot be empty.`)

//   //     case email.length == 0: return alert(`${props.values} fields cannot be empty.`)
//   //   }
//   // }











//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS
//WORKING App.JS 

//   import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, View } from 'react-native';
// import ViewButton from './src/screens/ViewButton';

// const App = (props) => {

//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [number, setNumber] = useState('');
//   const [email, setEmail] = useState('');

//   // const values = [name, age, number, email]

//   const checkName = (id) => {
//     if (name == '') {
//       return alert(`Name cannot be empty.`)
//     } else if (name.length < 3) {
//       return alert(`Invalid name (must be more than 3 character)`)
//     }
//   }

//   const checkAge = (id) => {
//     if (age == '') {
//       return alert(`Age cannot be empty.`)
//     } else if (age.length > 2) {
//       return alert(`Invalid age (must be 2 character)`)
//     }
//   }
//   const checkNumber = (id) => {
//     if (number == '') {
//       return alert(`Phone Number cannot be empty.`)
//     } else if (number.length < 10) {
//       return alert(`Invalid number (must be 10 character)`)
//     }
//   }
//   const checkEmail = (id) => {
//     if (email == '') {
//       return alert(`Email cannot be empty.`)
//     } else if (email.length < 4) {
//       return alert(`Invalid email (must be more than 4 character)`)
//     }
//   }

//   const setAlert = (props) => {
//     if (!checkName(id) && !checkAge(id) && !checkNumber(id) && !checkEmail(id)) {
//       return alert(`Your Name is ${name} \nYour Age is ${age} \nYour Number is ${number} \nYour Email is ${email}`);
//     } else return null;
//   }
//   // const clear = (values, setValues) => {
//   //   console.log('hi')
//   //   return setName(values, {...name});
//   // }

//   return (
//     <>
//       <Text style={styles.text}>SIMPLE FORM</Text>

//       <TextInput style={styles.input}
//         autoFocus={true}
//         autoCapitalize='characters'
//         values='Name'
//         placeholder="Enter name"
//         onChangeText={(name) => { setName(name) }}
//         onEndEditing={() => checkName()}
//       />
//       {/* <ViewButton
//         onSubmit={() => setValue('name', name)}
//       /> */}


//       <TextInput style={styles.input}
//         placeholder="Enter age"
//         keyboardType='number-pad'
//         values='Age'
//         onChangeText={(age) => { setAge(age) }}
//         onEndEditing={() => checkAge()}
//       />
//       {/* <ViewButton
//         onSubmit={() => setValue('age', age)}
//       /> */}


//       <TextInput style={styles.input}
//         placeholder="Enter phone"
//         keyboardType='number-pad'
//         values='Number'
//         onChangeText={(number) => { setNumber(number) }}
//         onEndEditing={() => checkNumber()}
//       />
//       {/* <ViewButton 
//         onSubmit={() => setValue('number', number)}
//       /> */}


//       <TextInput style={styles.input}
//         placeholder="Enter Email"
//         values='Email'
//         onChangeText={(email) => { setEmail(email) }}
//         onEndEditing={() => checkEmail()}
//       />
//       <ViewButton
//         onSubmit={() => setAlert()}
//       />


//       {/* <Button
//       title="CLEAR"
//       onPress={() => clear()}
//       /> */}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     borderColor: 'black',
//     borderWidth: 1,
//     margin: 10,
//     color: 'black'
//   },
//   text: {
//     fontSize: 30,
//     alignSelf: 'center',
//     marginVertical: 20
//   }
// });

// export default App;








// detail1= `Your First Name is ${firstName}`;
//     detail2= `Your Last Name is ${lastName} `;
//     detail3= `Your Age is ${age}`;
//     detail4= `Your Email is ${email}`;
//     detail5= `Your Address is: ${address}`;
//     detail6= `Your State is ${state}`;
//     detail7= `Your Country is ${country}`;

















____________________________________________________________________________________________________________________________________________________________________________








// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, Button, ScrollView, Switch } from 'react-native';

// const App = (props) => {

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [state, setState] = useState('');
//   const [country, setCountry] = useState('');


//   var idfname, idlname, idage, idemail, idaddress, idstate, idcountry, detailid, id;

//   const checkFirstName = () => {
//     if (firstName == '') {
//       return idfname = `First Name cannot be empty.`
//     }
//   }

//   const checkLastName = () => {
//     if (lastName == '') {
//       return idlname = `\nLast Name cannot be empty.`
//     }
//   }

//   const checkAge = () => {
//     if (age == '') {
//       return idage = `\nAge cannot be empty.`
//     }
//   }

//   const checkEmail = () => {
//     if (email == '') {
//       return idemail = `\nEmail cannot be empty.`
//     }
//   }

//   const checkAddress = () => {
//     if (address == '') {
//       return idaddress = `\nAddress cannot be empty.`
//     }
//   }

//   const checkState = () => {
//     if (state == '') {
//       return idstate = `\nState cannot be empty.`
//     }
//   }

//   const checkCountry = () => {
//     if (country == '') {
//       return idcountry = `\nCountry cannot be empty.`
//     }
//   }

//   const alertArray = [checkFirstName(idfname), checkLastName(idlname), checkAge(idage), checkEmail(idemail), checkAddress(idaddress), checkState(idstate), checkCountry(idcountry)];




//   const setAlert = () => {
//     // if (!checkFirstName(idfname) && !checkLastName(idlname) && !checkAge(idage) && !checkEmail(idemail) && !checkAddress(idaddress) && !checkState(idstate) && !checkCountry(idcountry)) {
//     return detailid = `Your First Name is ${firstName} 
//       \nYour Last Name is ${lastName} 
//       \nYour Age is ${age} 
//       \nYour Email is ${email} 
//       \nYour Address is: ${address} 
//       \nYour State is ${state} 
//       \nYour Country is ${country}`;

//   }
//   const alertDetail = [setAlert(detailid)];

//   // const setAlert = (props) => {
//   //       if (!checkName(id) && !checkAge(id) && !checkNumber(id) && !checkEmail(id)) {
//   //         return alert(`Your Name is ${name} \nYour Age is ${age} \nYour Number is ${number} \nYour Email is ${email}`);
//   //       } else return null;
//   //     }


  

//   const setData =() => {
//     // setFirstName({firstName: ['']});
//     // setLastName({lastName: ['']});
//     // setAge({age: ['']});
//     // setEmail({email: ['']});
//     // setAddress({address: ['']});
//     // setState({state: ['']});
//     // setCountry({country: ['']});
    
//     return (null);

//   }


//   console.log(alertArray)

//   console.log(alertDetail)

//   // const show = () => {

//   //   switch (alertArray ,alertDetail) {
//   //     // case alertArray: {
//   //     //   return alert(alertArray)
//   //     // }
//   //     case alertDetail: {
//   //       return alert(alertDetail)
//   //     }
//   //   }
//   //   return alert(alertArray);
//   // }
//   return (
//     <ScrollView>
//       <Text style={styles.text}>SIMPLE FORM</Text>

//       <TextInput style={styles.input}
//         autoFocus={true}
//         autoCapitalize='words'
//         placeholder="Enter First Name"
//         onChangeText={(firstName) => { setFirstName(firstName) }}
//         id={firstName}
//         onAccessibilityAction={()=> onPress()}
//       />

//       <TextInput style={styles.input}
//         autoCapitalize='words'
//         placeholder="Enter Last Name"
//         onChangeText={(lastName) => { setLastName(lastName) }}
//         id={lastName}
//       />

//       <TextInput style={styles.input}
//         placeholder="Enter age"
//         keyboardType='number-pad'
//         onChangeText={(age) => { setAge(age) }}
//         id={age}
//       />

//       <TextInput style={styles.input}
//         placeholder="Enter Email"
//         keyboardType="email-address"
//         onChangeText={(email) => { setEmail(email) }}
//         id={email}
//       />

//       <TextInput style={styles.input}
//         placeholder="Enter Address"
//         multiline={true}
//         keyboardType='default'
//         onChangeText={(address) => { setAddress(address) }}
//         id={address}
//       />

//       <TextInput style={styles.input}
//         placeholder="Enter State"
//         onChangeText={(state) => { setState(state) }}
//         id={state}
//       />

//       <TextInput style={styles.input}
//         placeholder="Enter Country"
//         onChangeText={(country) => { setCountry(country) }}
//         id={country}
//       />

//       <Button
//         title={`Submit`}
//         onPress={() => alert(`${alertArray} ${alertDetail} `)}
//       />
//       {/* alert(`${alertArray} ${alertDetail} `) */}
//       <Button
//         title={`Reset`}
//         onPress={() => setData()}
//         color='red'
//       />
//       {/* ({...firstName, setFirstName: ''}, {...lastName, setLastName: ''}, {...age, setAge:''}, {...email, setEmail: ''}, {...address, setAddress: ''}, {...state, setState: ''}, {...country, setCountry: ''}) */}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     borderColor: 'black',
//     borderWidth: 1,
//     margin: 10,
//     color: 'black'
//   },
//   text: {
//     fontSize: 30,
//     alignSelf: 'center',
//     marginVertical: 20
//   },
//   container: {
//     alignSelf: 'flex-end'
//   }
// });

// export default App;

















_______________________________________________________________________________________________________________________________________________________________






// , detailid1, detailid2, detailid3, detailid4, detailid5, detailid6, detailid7
  // const checkDetail1 = () => {
  //   if (firstName === '') {
  //     return null;
  //   } return detailid1 = `Your First Name is ${firstName}`
  // }
  // const checkDetail2 = () => {
  //   if (firstName === '') {
  //   }
  //   return detailid2 = `\nYour Last Name is ${lastName}`
  // }
  // const checkDetail3 = () => {
  //   if (firstName === '') {
  //   }
  //   return detailid3 = `\nYour Age Name is ${age}`
  // }
  // const checkDetail4 = () => {
  //   if (firstName === '') {
  //   }
  //   return detailid4 = `\nYour Email Name is ${email}`
  // }
  // const checkDetail5 = () => {
  //   if (firstName === '') {
  //   }
  //   return detailid5 = `\nYour Address Name is ${address}`
  // }
  // const checkDetail6 = () => {
  //   if (firstName === '') {
  //   }
  //   return detailid6 = `\nYour State Name is ${state}`
  // }
  // const checkDetail7 = () => {
  //   if (firstName === '') {
  //   }
  //   return detailid7 = `\nYour Country Name is ${country}`
  // }


  // const alertDetail = [checkDetail1(detailid1), checkDetail2(detailid2), checkDetail3(detailid3), checkDetail4(detailid4), checkDetail5(detailid5), checkDetail6(detailid6), checkDetail7(detailid7)];

  // // const setAlert = (props) => {
  // //       if (!checkName(id) && !checkAge(id) && !checkNumber(id) && !checkEmail(id)) {
  // //         return alert(`Your Name is ${name} \nYour Age is ${age} \nYour Number is ${number} \nYour Email is ${email}`);
  // //       } else return null;
  // //     }
  // alertDetail.push(...alertArray)


_______________________________________________________________________________________________________________________________________________________________





// const show = () => {

  //   switch (alertArray ,alertDetail) {
  //     // case alertArray: {
  //     //   return alert(alertArray)
  //     // }
  //     case alertDetail: {
  //       return alert(alertDetail)
  //     }
  //   }
  //   return alert(alertArray);
  // }





  {/* alert(`${alertArray} ${alertDetail} `) */}






  {/* ({...firstName, setFirstName: ''}, {...lastName, setLastName: ''}, {...age, setAge:''}, {...email, setEmail: ''}, {...address, setAddress: ''}, {...state, setState: ''}, {...country, setCountry: ''}) */}