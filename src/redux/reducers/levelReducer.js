import {SET_LEVEL} from '../actions/actionTypes';

const initialState = {
    level: {
        id: 'level',
        name: 'level',
        value: '1',
        searchValue: '',
        searchDisabled: false,
        options: [
            { id: 1, name: "High School" },
            { id: 2, name: "College" },
            { id: 3, name: "University" },
            { id: 4, name: "Master’s" },
            { id: 5, name: "Ph.D." }
        ],
        filteredOptions: '',
        label: 'Academic Level',
        dropdownOpen: false
    }
}

export default function levelReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_LEVEL:
            return {
                ...state,
                level: {
                    ...state.level,
                    value: payload
                }
            };
    
        default:
            return state;
    }
}