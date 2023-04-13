import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import FirebaseContext from './store/FirebaseContext';
import firebase from './Firebase/Config'
import {AuthProvider} from './store/AuthUserContext';
import { PostDetailProvider } from './store/PostDetailsContext';


ReactDOM.render(

<Provider store={store}>
<FirebaseContext.Provider value={firebase}>
<AuthProvider>
<PostDetailProvider>
<App />
</PostDetailProvider>
</AuthProvider>
</FirebaseContext.Provider>
</Provider>


, document.getElementById('root'));
