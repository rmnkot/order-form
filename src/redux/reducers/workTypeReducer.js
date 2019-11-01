import { FETCH_WORK_TYPE, SET_WORK_TYPE } from '../actions/actionTypes';

const initialState = {
    name: 'workType',
    value: '1',
    params: [],
    label: 'Select Type of Work'
}

export default function workTypeReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_WORK_TYPE:
            return {              
                ...state,
                params: payload
            };

        case SET_WORK_TYPE:
            return {
                ...state,
                value: payload
            };

        default:
            return state;
    }
}