import workTypeReducer from './workTypeReducer';
import levelReducer from './levelReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    workTypeReducer,
    levelReducer
});

export default rootReducer;