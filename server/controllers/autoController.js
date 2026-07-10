const User=require("../models/User");

const register=async(req,res)=>{


try{


const user=new User(req.body);


await user.save();



res.json({

message:"User Registered Successfully"

});


}

catch(err){

res.status(500).json(err);

}


}



module.exports={register};