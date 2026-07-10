const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

userId:{
type:String,
required:true
},

vehicle:{
type:String,
required:true
},

price:{
type:String,
required:true
},

date:{
type:String,
required:true
},

// ⭐ Payment Details

paymentId:{
type:String
},

paymentStatus:{
type:String,
default:"Pending"
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Booking",bookingSchema);