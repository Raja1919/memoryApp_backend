require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes=require('./Routes/posts.js')

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api',postRoutes)

// connect to mongodb
const url = process.env.MONGO_URL;
mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => console.log(`server started localHost:${PORT}`));
