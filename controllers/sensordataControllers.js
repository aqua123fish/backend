const sensorData = require("../models/sensordata");
const experimentData = require("../models/experiment");
const hello = (req, res, next) => {
    console.log(req);
    res.status(200).json({
        message: "Hello from Server!!"
    });
}

const posttest = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
        message: "Post Request Received Successfully"
    })
}
const allsenosrdataHandler = async (req, res, next) => {
    let expdata;
    try {
        expdata = await experimentData.find();
        //console.log(sensordata);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Updating Data Failed!",
        });
    }
    console.log(expdata);
}
const sensordataHandler = async (req, res, next) => {
    const { typea,typeb,typec,typed,typee,typef,typeg,typeh} = req.body;
    let exists = false, sensordata;
    try {
        sensordata = await sensorData.find();
        if (sensordata.length == 1) {
            exists = true;
        }
        //console.log(sensordata);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Updating Data Failed!",
        });
    }
    if (exists) {
        const result = await sensorData.findOneAndUpdate(
            { _id: sensordata[0]._id },
            {
                typea:typea,
                typeb:typeb,
                typec:typec,
                typed:typed,
                typee:typee,
                typef:typef,
                typeg:typeg,
                typeh:typeh
            }
        );
        try {
            const newexpdata = new experimentData({
                typea:typea,
                typeb:typeb,
                typec:typec,
                typed:typed,
                typee:typee,
                typef:typef,
                typeg:typeg,
                typeh:typeh
            });
            await newexpdata.save();
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Updating Data Failed!",
            });
        }
    }
    else {
        try {
            const newSensorData = new sensorData({
                typea:typea,
                typeb:typeb,
                typec:typec,
                typed:typed,
                typee:typee,
                typef:typef,
                typeg:typeg,
                typeh:typeh
            });
            await newSensorData.save();
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Updating Data Failed!",
            });
        }
        try {
            const newexpdata = new experimentData({
                typea:typea,
                typeb:typeb,
                typec:typec,
                typed:typed,
                typee:typee,
                typef:typef,
                typeg:typeg,
                typeh:typeh
            });
            await newexpdata.save();
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Updating Data Failed!",
            });
        }
    }
    res.status(200).json({
        message: "Data Updated Successfully!!",
    });
}

const addHours = (numofHours, date = new Date().now()) => {
    date.setTime(date.getTime() + numofHours * 60 * 60 * 1000)
    return date;
}

const getdataHandler = async (req, res, next) => {
    let sensordata, updatedAtnew;
    try {
        sensordata = await sensorData.find();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Updating Data Failed!",
        });
    }
    if (sensordata.length == 1) {
        const { typea,typeb,typec,typed,typee,typef,typeg,typeh,updatedAt } = sensordata[0];
        const updatedAtold = new Date(updatedAt);
        updatedAtnew = addHours(5.52, updatedAtold);
        res.status(200).json({
            typea:typea,
                typeb:typeb,
                typec:typec,
                typed:typed,
                typee:typee,
                typef:typef,
                typeg:typeg,
                typeh:typeh,
            timestamp: updatedAtnew,
        });
    } else {
        res.status(400).json({ message: "no data found" });
    }
}
exports.hello = hello;
exports.posttest = posttest;
exports.sensordataHandler = sensordataHandler;
exports.getdataHandler = getdataHandler;
exports.allsenosrdataHandler = allsenosrdataHandler;