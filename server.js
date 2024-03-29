import 'dotenv/config';
import mongoose from "mongoose";
import app from "./app.js"
const { DB_HOST, PORT = 4001} = process.env;

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection successful');
    })
  }).catch((error) => {
    console.log(error.message);
    process.exit(1);
  })