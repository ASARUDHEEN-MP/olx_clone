import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { useEffect } from 'react';
import { authUser } from './Actions/authUserAction';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  const firebase = useSelector(state=>state.firebase.firebase)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      dispatch(authUser(user))
    })

    console.log(user,'kljjfldkjgdfkjgkfdg')

  })
  return (
    <div>
      <Router>
        <Route exact path='/'>  
        <Home />
        </Route>

        <Route path='/signup'>  
        <Signup/>
        </Route>

        <Route path='/login'>
        <Login/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
