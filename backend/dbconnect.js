const mongoose = require("mongoose");

const Connection = async () => {
  try {
    const dbconnect = await mongoose.connect(process.env.MONGO_URI, {});
    console.log("database connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = Connection;


