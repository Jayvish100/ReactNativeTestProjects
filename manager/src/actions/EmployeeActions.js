import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYESS_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS, GO_BACK } from './types';
import firebase from 'firebase';
import { navigate } from '../navigationRef';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                navigate('EmpList');
            })
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYESS_FETCH_SUCCESS, payload: snapshot.val() })
            })
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(()=> {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                navigate('EmpList');
            });
    };
};

export const goBack = () => {
    return (dispatch) => {
        dispatch({ type: GO_BACK });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                navigate('EmpList');
            });
    };
};