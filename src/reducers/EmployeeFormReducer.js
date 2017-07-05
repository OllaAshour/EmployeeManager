import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLPOYEE_SAVE_SUCCESS
} from '../actions/types';

//intialize state to empty object
const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
        //action.payload === {prop: 'name',  value: 'jane' }
        //not an array
        //key interoplation determined at runtime
        //alternative would be 
        /*const newState = {};
        newState[action.payload.prop] = action.payload.value*/
        //and then pass newState
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLPOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default: 
            return state;
    }
};

