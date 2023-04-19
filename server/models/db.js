const mongoose = require("mongoose");
// var MongoClient = require('mongodb').MongoClient;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

  }, err => {

    if (!err) {

      console.log("Connection succeeded");

    } else {

      console.log("Error in connection: " + err);

    }

  }

);