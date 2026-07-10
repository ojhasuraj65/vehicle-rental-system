const express = require("express");

const router = express.Router();

const {
addVehicle,
getVehicles
}=require("../controllers/vehicleController");


router.post("/add",addVehicle);

router.get("/all",getVehicles);

module.exports=router;
