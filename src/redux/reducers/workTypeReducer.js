import { FETCH_WORK_TYPE, SET_WORK_TYPE } from '../actions/actionTypes';

const initialState = {
    workType: {
        name: 'workType',
        value: '1',
        params: [],
        label: 'Select Type of Work'
    }
}

export default function workTypeReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_WORK_TYPE:
            return {
                ...state,
                workType: {
                    ...state.workType,
                    params: payload
                }
            };

        case SET_WORK_TYPE:
            return {
                ...state,
                workType: {
                    ...state.workType,
                    value: payload
                }
            };

        default:
            return state;
    }
}