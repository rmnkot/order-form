import { FETCH_LEVEL, SET_LEVEL } from '../actions/actionTypes';

const initialState = {
    id: 'level',
    name: 'level',
    value: '1',
    searchValue: '',
    searchDisabled: false,
    options: [],
    filteredOptions: '',
    label: 'Academic Level',
    dropdownOpen: false
}

export default function levelReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_LEVEL:
            return {
                ...state,
                options: payload
            };

        // case SET_LEVEL:
        //     return {
        //         ...state,
        //         value: payload
        //     };
    
        default:
            return state;
    }
}