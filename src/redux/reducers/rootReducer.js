import { combineReducers } from 'redux';
import ui from './ui';
import user from './user';
import brand from './brand';

const rootReducer = combineReducers({
    ui,
    user,
    brand,
});

export default rootReducer;
