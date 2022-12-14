const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// let dbUrl = "";
// if (process.env.NODE_ENV === "production") {
//   dbUrl = process.env.MONGODB_URI;
// }

// if (process.env.NODE_ENV === "test") {
//   dbUrl = process.env.MONGODB_TEST_URI;
// }

// if (process.env.NODE_ENV === "development") {
//   dbUrl = process.env.MONGODB_DEV_URI;
// }

// if (!dbUrl) {
//   console.log("Mongo url not set in env file");
//   return new Error("Mongo url not set in env file");
// }
mongoose.connect(
  "mongodb+srv://GeniusCar:LK2sz5SDkDT1dbOP@cluster0.gzjd3.mongodb.net/geniusCar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.log(`FAILED to connect using mongoose. ${error}`);
    } else {
      console.log(`Connected to DB server.`);
    }
  }
);

//Cache

module.exports = mongoose;
