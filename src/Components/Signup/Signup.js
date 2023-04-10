import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../../Actions/signupActions';


export default function Signup() {
  const history = useHistory()
  const dispatch = useDispatch()
  const signup = useSelector(state=>state.signup);
  const firebase = useSelector(state=>state.firebase.firebase);


  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(signup.email,signup.password).then((result)=>{
      result.user.updateProfile({displayName:signup.username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:signup.username,
          phone:signup.phone
        }).then(()=>{
          history.push("/login")
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form  onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={signup.username}
            onChange={(e)=>dispatch(updateField(e.target.name,e.target.value))}
            id="fname"
            name="username"
            defaultValue=""
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={signup.email}
            onChange={(e)=>dispatch(updateField(e.target.name,e.target.value))}
            id="fname"
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={signup.phone}
            onChange={(e)=>dispatch(updateField(e.target.name,e.target.value))}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value = {signup.password}
            onChange={(e)=>dispatch(updateField(e.target.name,e.target.value))}
            id="lname"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
