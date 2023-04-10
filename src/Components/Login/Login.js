import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateField_Signin } from '../../Actions/signinAction';
function Login() {

  // const[email,setEmail] = useState('')
  // const[password,setPassword] = useState('')
  const history = useHistory()
  const firebase = useSelector(state=>state.firebase.firebase)
  const signin = useSelector(state=>state.signin)
  const dispatch = useDispatch()

  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(signin.email,signin.password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={signin.email}
            name="email"
            onChange={(e)=>dispatch(updateField_Signin(e.target.name,e.target.value))}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={signin.password}
            id="lname"
            name="password"
            onChange={(e)=>dispatch(updateField_Signin(e.target.name,e.target.value))}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
