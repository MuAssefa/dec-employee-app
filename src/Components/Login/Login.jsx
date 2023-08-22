import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
  export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        navigate ("/employee-list");
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" 
                 placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" 
                 placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            {/* <button className="link-btn" onClick={() => navigate("/register")}>Don't have an 
             account? Register here.</button> */}
             <a className="link-btn" href="/register">Don't have an account? Register here.</a>
        

        </div>
    )
}

