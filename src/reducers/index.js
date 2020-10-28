import { combineReducers } from 'redux';
import AuthReducer from  './AuthReducer';
import todoReducer from './todoReducer'
import Visibility from './Visibility'

const reducers = combineReducers({
   
    todoReducer,
    Visibility
});

export default reducers;