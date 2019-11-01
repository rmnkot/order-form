import {combineReducers} from 'redux';

import workTypeReducer from './workTypeReducer';
import levelReducer from './levelReducer';
import paperFormatReducer from './paperFormatReducer';

const rootReducer = combineReducers({
    workType: workTypeReducer,
    level: levelReducer,
    paperFormat: paperFormatReducer
});

export default rootReducer;