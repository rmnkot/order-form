import { FETCH_PAPER_FORMAT, SET_PAPER_FORMAT } from "../actions/actionTypes";

const initialState = {
    id: 'paperFormat',
    name: 'paperFormat',
    value: '1',
    searchValue: '',
    searchDisabled: false,
    options: [],
    filteredOptions: '',
    label: 'Paper Format',
    dropdownOpen: false
}

export default function levelReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_PAPER_FORMAT:
            return {
                ...state,
                options: payload
            };

        // case SET_PAPER_FORMAT:
        //     return {
        //         ...state,
        //         value: payload
        //     };
    
        default:
            return state;
    }
}