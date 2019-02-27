// This the RootReducer!!!
// To make a RootReducer: 
// 1. Get combineReducers method from redux
import { combineReducers } from 'redux';
// 2. Call combineReducers method an pass it an object
import authReducer from './authReducer';
// 3. Each key/property of the object, will be a single 
const rootReducer = combineReducers({
    auth: authReducer
})
// function that returns a piece of application/redux state
// 4. Each value will be a single reducer (imported)

export default rootReducer;