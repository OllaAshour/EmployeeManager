import { 
    EMAIL_CHANGED,
     PASSWORD_CHANGED,
     LOGIN_USER_SUCCESS,
     LOGIN_USER_FAIL,
     LOGIN_USER_START 
} from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
        return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
        //test; will result in error occurring and results in firebase going to catch.
       // return { ...state, user: action.payload, error: '', loading: false, email: '', password: '' }; //reset error message if there was one
        return { ...state, ...INITIAL_STATE, user: action.payload };ß
        case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed', password: '', loading: false }; //reset password
        case LOGIN_USER_START: 
        return { ...state, loading: true, error: '' };
        default:
        return state;
    }
};
