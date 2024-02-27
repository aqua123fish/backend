const express=require('express');

const router=express.Router();

const sensorDataController = require('../controllers/sensordataControllers');

router.get("/hello",sensorDataController.hello);

router.post("/posttest",sensorDataController.posttest);

router.post("/sensordata",sensorDataController.sensordataHandler);

router.get("/sensordata",sensorDataController.getdataHandler);

module.exports=router;