import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import "../../assets/styles/css/login.css"

function Login() {

  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')

  async function onSubmit(e){
      e.preventDefault();

      
      try {
        await axios.post("http://localhost:8000/",{
          email,password
        })
        .then(res=>{
          if(res.data==="exist"){
            history("/home",{state:{id:email}})

          }
          else if(res.data==="notexist"){
            alert("Please sign in to continue")
          }
        })
        .catch(e=>{
          alert("Wrong details")
          console.log(e);
        })
      } catch (e) {
        console.log(e);
      }

  }

  return (
    <div className="form-box">
      <h1>Login</h1>
      <form className="login" action="post">
        <div className="field">
          <input type="text" name="email" id="email" placeholder="Email"
                 onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
        </div>
        <div className="field">
          <input type="password" name="password" id="password" placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
        </div>
        <input type="submit" onClick={onSubmit}/>
      </form>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default Login;
