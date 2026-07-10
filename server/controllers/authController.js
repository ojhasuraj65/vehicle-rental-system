const User = require("../models/User");
const bcrypt = require("bcryptjs");



// REGISTER

exports.register = async(req,res)=>{


try{


console.log("REGISTER API HIT");
console.log(req.body);


const {name,email,password}=req.body;


// check existing user

const existingUser = await User.findOne({email});


if(existingUser){

return res.status(400).json({

message:"User already exists"

});

}



const hashPassword = await bcrypt.hash(password,10);



const user = await User.create({

name,
email,
password:hashPassword

});



console.log("USER SAVED",user);



res.status(201).json({

message:"User Registered Successfully"

});


}


catch(error){


console.log("REGISTER ERROR",error.message);


res.status(500).json({

message:error.message

});


}


}




exports.login = async(req,res)=>{

try{

console.log("LOGIN API HIT");
console.log(req.body);


const {email,password}=req.body;



const user = await User.findOne({email});


if(!user){

return res.status(400).json({

message:"User not found"

});

}



const matchPassword = await bcrypt.compare(
password,
user.password
);



if(!matchPassword){

return res.status(400).json({

message:"Wrong Password"

});

}



res.status(200).json({
    message: "Login Successful",
    user: {
        _id: user._id,
        name: user.name,
        email: user.email
    }
});

}


catch(error){

console.log("LOGIN ERROR:",error.message);


res.status(500).json({

message:error.message

});


}


}