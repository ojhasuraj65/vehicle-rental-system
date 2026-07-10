import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [showPassword,setShowPassword]=useState(false);

const registerUser = async()=>{

try{

const res = await fetch("http://localhost:5000/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})

});

const data=await res.json();

if(res.ok){

alert("🎉 Registration Successful");

}

else{

alert(data.message);

}

}
catch(error){

alert("Server Error");

}

}

return(

<div className="register-page">

<div className="left-side">

<h1>Drive Your Dream Car 🚗</h1>

<p>

Luxury Cars | Bikes | SUVs

Book Anytime, Anywhere

</p>

</div>

<div className="right-side">

<div className="register-box">

<h1>Create Account</h1>

<p>Register to continue</p>

<div className="input-box">

<FaUser/>

<input
type="text"
placeholder="Full Name"
onChange={(e)=>setName(e.target.value)}
/>

</div>

<div className="input-box">

<FaEnvelope/>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

</div>

<div className="input-box">

<FaLock/>

<input
type={showPassword?"text":"password"}
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<span onClick={()=>setShowPassword(!showPassword)}>

{showPassword?<FaEyeSlash/>:<FaEye/>}

</span>

</div>

<button onClick={registerUser}>

Create Account

</button>

<p className="login-text">

Already have an account?

<Link to="/login">

 Login

</Link>

</p>

</div>

</div>

</div>

)

}

export default Register;