import React, { useState } from "react";
import "./Login.css";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = async () => {

    if(email==="" || password===""){
      alert("Please fill all fields");
      return;
    }

    try{

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if(response.ok){

        alert("🎉 Login Successful");

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        console.log("LOGIN RESPONSE =", data);

localStorage.setItem(
"user",
JSON.stringify(data.user)
);

console.log("LOCAL STORAGE =", localStorage.getItem("user"));

        navigate("/dashboard");

      }

      else{

        alert(data.message);

      }

    }

    catch(error){

      console.log(error);

      alert("Server not connected");

    }

  };

  return (

    <div className="login-page">

      {/* Left Side */}

      <div className="left-side">

        <div className="overlay"></div>

        <div className="hero-content">

          <h1>

            Start Your
            <br />

            <span>Journey</span>

          </h1>

          <p>

            Book your favourite Cars, Bikes & SUVs
            anytime anywhere.

          </p>

          <div className="hero-features">

            <div className="feature">
              🚗 Luxury Cars
            </div>

            <div className="feature">
              🏍 Premium Bikes
            </div>

            <div className="feature">
              ⭐ Trusted Service
            </div>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="right-side">

        <div className="login-box">

          <h1>Welcome Back 👋</h1>

          <p>Login to Vehicle Rental System</p>

          <div className="input-box">

            <FaEnvelope className="icon"/>

            <input

              type="email"

              placeholder="Enter Email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

            />

          </div>

          <div className="input-box">

            <FaLock className="icon"/>

            <input

              type={showPassword ? "text":"password"}

              placeholder="Enter Password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

            />

            <span
            className="eye"
            onClick={()=>setShowPassword(!showPassword)}
            >

              {
                showPassword
                ?
                <FaEyeSlash/>
                :
                <FaEye/>
              }

            </span>

          </div>

          <button onClick={loginUser}>

            Login

          </button>

          <p className="register-link">

            Don't have an account?

            <Link to="/register">

              Register

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}

export default Login;