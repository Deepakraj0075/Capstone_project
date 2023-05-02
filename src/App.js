import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { RegisterVerifyUser } from "./RegisterVerifyUser";
// import  { Footer } from "./Footer";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> :
        currentForm === "register" ? <Register onFormSwitch={toggleForm} /> :
        currentForm === "registerverifyuser" ? <RegisterVerifyUser onFormSwitch={toggleForm} /> :
        null
      }
      {/* <Footer/> */}
    </div>
  );
}

export default App;
