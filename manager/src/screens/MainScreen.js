import React, { Component } from 'react';
import firebase from 'firebase';
import LoginForm from '../components/LoginForm';

class MainScreen extends Component {

    componentDidMount() {

        const firebaseConfig = {

            apiKey: "AIzaSyBUKIWYwpB5aIocEmgYDzhnfqqSV2qISDU",

            authDomain: "manager-d7a08.firebaseapp.com",

            databaseURL: "https://manager-d7a08-default-rtdb.europe-west1.firebasedatabase.app",

            projectId: "manager-d7a08",

            storageBucket: "manager-d7a08.appspot.com",

            messagingSenderId: "613606333796",

            appId: "1:613606333796:web:1ecd075c8a2991a4032e71",

            measurementId: "G-KRZ6KMC924"

        };


        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app(); // if already initialized, use that one
        }
    };


    render() {
        return (
            <LoginForm />
        )
    };
};

MainScreen.navigationOptions = () => {
    return {
        title: 'Login/SignUp',
    };
};

export default MainScreen;