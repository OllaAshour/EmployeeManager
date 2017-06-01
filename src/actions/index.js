import firebase from 'firebase';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START 
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};

//redux thunk is used for ajax/long running requets to handle asyn action creators
export const loginUser = ({ email, password }) => {
    console.log(email, password);
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserWithSuccess(dispatch, user))
        .catch((error) => {
            console.log(error);
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserWithSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
        });
    };
};


const loginUserWithSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL,
    });
};
