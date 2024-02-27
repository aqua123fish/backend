const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const sensordataRoutes = require('./routes/sensordataRoutes');
const expDataRoutes = require("./routes/experimentdataRoutes");
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use("/api", sensordataRoutes);
app.use("/exp", expDataRoutes);

const port=process.env.PORT || 1111;

mongoose.set('strictQuery', false);
mongoose
    .connect(
        'mongodb+srv://aquaprojectvishnu:aqua123@cluster0.7jbunr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then((result) => {
        console.log("app is running...")
        app.listen(port);
    }).catch((err) => {
        console.log(err);
    })
