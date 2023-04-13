import {createStore,combineReducers} from 'redux';
import signupReducer from '../Reducers/signupReducers';
import signinReducer from '../Reducers/signinReducer';
import authReducer from '../Reducers/authReducer';
import CreateFormReducer from '../Reducers/CreateFormReducer';
import productReducer from '../Reducers/productReducer';
import PostReducer from '../Reducers/PostReducer';
import ProfileReducer from '../Reducers/ProfileReducer';
import AdminLoginReducer from '../Reducers/AdminLoginReducer';



const rootReducer = combineReducers({
    signup:signupReducer,
    signin:signinReducer,
    user:authReducer,
    createForm:CreateFormReducer,
    product:productReducer,
    postDetails:PostReducer,
    profile:ProfileReducer,
    admin_login:AdminLoginReducer,
})


const store = createStore(rootReducer);

export default store