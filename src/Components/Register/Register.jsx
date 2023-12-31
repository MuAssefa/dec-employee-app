import React, {useState} from "react"; 
import { useNavigate } from "react-router-dom";
import "./Register.css";

  export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
  const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        navigate ("/employee-list");

    }

    return (
        <div className="register-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" 
             placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" 
             placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" 
             placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        {/* <button className="link-btn" onClick={() =>navigate("/login") }>Already have an 
         account? 
         Login here.</button> */}
      <a className="link-btn" href="/login">Already have an account? Login here.</a>

       </div>
    )
}

