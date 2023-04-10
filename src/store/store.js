import {createStore,combineReducers} from 'redux';
import signupReducer from '../Reducers/signupReducers';
import firebaseReducer from '../Reducers/firebaseReducer';
import signinReducer from '../Reducers/signinReducer';
import authReducer from '../Reducers/authReducer';



const rootReducer = combineReducers({
    signup:signupReducer,
    signin:signinReducer,
    firebase:firebaseReducer,
    user:authReducer,
})


const store = createStore(rootReducer);

export default store