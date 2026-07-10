const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");


const app = express();


app.use(cors());

app.use(express.json());



// Auth route

app.use("/api/auth", authRoutes);



// Booking route

// Booking route
app.use("/api/booking", bookingRoutes);

// Payment route
app.use("/api/payment", paymentRoutes);




mongoose.connect(process.env.MONGO_URI)

.then(()=>{

console.log("MongoDB Connected");

})

.catch((err)=>{

console.log(err.message);

});




app.get("/",(req,res)=>{

res.send("Vehicle Rental API Running");

});




app.listen(5000,()=>{

console.log("Server running on port 5000");

});