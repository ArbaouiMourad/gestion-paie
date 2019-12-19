const mongoose = require("mongoose");
const config = require("config");
// const db = config.get("MONGOURI")
const connectdb = async () => {
  try {
    await mongoose.connect(config.get("MONGOURI"), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex:true
    });
    console.log("db connected ...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

};
module.exports = connectdb;