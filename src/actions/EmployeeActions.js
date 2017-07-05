import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLPOYEE_SAVE_SUCCESS
} from './types';

/* Passing values */
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
   
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`) //path to JSON data store
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
            Actions.employeeList({ type: 'reset' });
        });
    };
};


export const employeesFetch = () => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            //any time any data comes cross this ref, get a snapshot of the data
            //snapshot is an object that describes the data
            //an object that we can get an handle on the employees objects
            .on('value', snapshot => {
                 dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

//save updating records to firebase
export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLPOYEE_SAVE_SUCCESS }); //Save here does not automatically update state in fetch, the fetch does that
            Actions.employeeList({ type: 'reset' });
        });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.employeeList({ type: 'reset' });
        });
    };
};

