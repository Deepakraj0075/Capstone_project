import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";
import { BrowserRouter, Route, Link } from 'react-router-dom';

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: pass
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log("onSuccess:", data);
        props.onFormSwitch('registerverifyuser');
      },

      onFailure: err => {
        console.error("onFailure:", err);
        alert('Invalid email/password');
        window.location.href = '/Invalid';
        // props.onFormSwitch('registerverifyuser')
      },

      newPasswordRequired: data => {
        console.log("newPasswordRequired:", data);
      }
    });
  }

  return (
    <BrowserRouter>
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        {/* <button type="submit" onClick={() => props.onFormSwitch('register')}>Log In</button> */}
        <button type="submit">Log In</button>

      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
    </BrowserRouter>
  )
}