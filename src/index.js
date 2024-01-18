import dotenv from "dotenv"
import  connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(() =>{
  app.listen(process.env.PORT || 8000,() =>{
    console.log(`Server is running at port : ${port.env.PORT}`);
  })
})
.catch((error) =>{
  console.log("MongoDb connection Failed!");
})
















/*
import express from "express";
const app = express();
//database jbb bhi baat kro async rkho aur try catch bnao

//iffy
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    })

    app.listen(process.env.PORT,() =>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})()
*/