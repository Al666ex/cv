
import {combineReducers} from 'redux'

import userReducer from './usersReducer';
import authReducer from './authReducer';

const reducer = combineReducers({
    users : userReducer,    
    isAuth : authReducer
})

export default reducer