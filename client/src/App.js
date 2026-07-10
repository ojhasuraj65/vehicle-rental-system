// function App() {
//   return (
//     <div>
//       <h1>Vehicle Rental Management System</h1>
//       <p>Welcome to VRMS</p>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vehicles from "./pages/Vehicles";
import Dashboard from "./pages/Dashboard";
import MyBookings from "./pages/MyBookings";

import "./App.css";


function App(){

return(
<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route path="/vehicles" element={<Vehicles/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/mybookings" element={<MyBookings/>}/>



</Routes>


</BrowserRouter>
)

}


export default App;
<Route path="*" element={<Home/>}/>