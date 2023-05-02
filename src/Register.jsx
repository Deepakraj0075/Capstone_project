import React, { useState } from "react";
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useHistory } from 'react-router-dom';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [otp, setOtp] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);
    const history = useHistory();

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(email);
        UserPool.signUp(email, pass, [], null, (err, data) => {
            if (err) console.error(err);
            console.log(data);
            setIsSignedUp(true);
          });
    }

    const handleVerify = (e) => {
        e.preventDefault();
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
          });
          console.log(user);
          user.confirmRegistration(name, true, (err, data) => {
            if (err) {
              console.log(err);
              alert("Couldn't verify account");
            } else {
              console.log(data);
              alert('Account verified successfully');
              window.location.href = '/login';
            }
          });
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        {isSignedUp ? (
            <form className="register-form2" onSubmit={handleVerify}>
                <label htmlFor="otp">Verify OTP</label>
                <input value={name} name="code" onChange={(e) => setName(e.target.value)} id="code" placeholder="code" />
                <button className="link-btn">VERIFY</button>
            </form>
        ) : (
            <form className="register-form" onSubmit={handleSignUp}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Sign Up </button>
            </form>
        )}
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
