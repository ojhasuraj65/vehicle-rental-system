const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },

    fuel:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    available:{
        type:Boolean,
        default:true
    }

});

module.exports = mongoose.model("Vehicle",vehicleSchema);
