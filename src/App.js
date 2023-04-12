import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Profile from './Components/Profile/Profile';
import { useEffect } from 'react';
import { authUser } from './Actions/authUserAction';



/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import ViewPost from './Pages/ViewPost';


function App() {
  const dispatch = useDispatch()
  const firebase = useSelector(state=>state.firebase.firebase)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      dispatch(authUser(user))
    })

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

        <Route path="/Create">
          <Create/>
        </Route>

        <Route path='/view'>
         <View/>
        </Route>

        <Route path='/profile'>
          <Profile/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
