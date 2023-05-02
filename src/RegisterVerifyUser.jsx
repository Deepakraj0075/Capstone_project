import React, { useState } from "react";
import { MyContext } from './MyContext';
import UserPool from "./UserPool";
import "./RegisterVerifyUser.css"; // import CSS file
// import  { Footer } from "./Footer";

export const RegisterVerifyUser = (props) => {

    const handleButtonClick = () => {
        window.open('https://console.aws.amazon.com/', '_blank'); // to open a aws console page to perform the task
      };

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [code, setName] = useState('');

    const handleSubmitVerify = (e) => {
        e.preventDefault();
        console.log(email);
        console.log("success" + email)
    }

    return (

        <div className="auth-form-container1">
            
            <div className="container">
                <div className="question">
                <h2>Question: </h2>
                    <h2>Your organization wants you to deploy a highly scalable WordPress on AWS</h2>
                    <h4>Additional Requirement:</h4>
                    <ul class="f-menu">
                        <li> The Deployment should be in the region us-west-2.</li>
                        <li> The Scaling policy should depend on 60% CPU Utilization.</li>
                        <li> The website should be distributed by a CDN to reduce load time.</li>
                        <li> The website should be hosted on Apache Webserver.</li>
                    </ul>

                    <h4>Below are some organizational standards that need to be followed:</h4>
                    <ul class="f-menu">

                        <li> EC2 instance size: t2.micro</li>
                        <li> AutoScaling Group Name: asg46704</li>
                        <li> LoadbalancerName: alb46704</li>
                        <li> Database Instance Name: database46704</li>
                        <li> Database Instance Size: db.t2.micro</li>
                        <li> Database Engine: MySQL</li>
                        <h5>Note: Create Resources in us-west-2 region.</h5>
                    </ul>
                </div>
            </div>
            <form className="register-verify-form" onSubmit={handleSubmitVerify}>
                {/* <label htmlFor="codel" id="code1">Successfully logged in</label> onSubmit={handleSubmitVerify*/}
            </form>
            <div className="button-container">
                <button className="button" onClick={handleButtonClick}> Take Test</button>
                <button className="button" onClick={() => console.log('Submit Test')}>Submit Test</button>
                {/* <button className="button-professional" onClick={() => console.log('Professional')}>Professional</button> */}
            </div>
            {/* <Footer/> */}
        </div>
    )
}

