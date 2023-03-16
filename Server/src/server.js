const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const useRoute = require("./routes");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/v1/public/image", express.static(path.join(__dirname, "./public/image")));

const PORT = process.env.PORT || 5000;

useRoute(app);
mongoose.set("strictPopulate", false);

mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("Connected ");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("🚀 ~ file: server.js:41 ~ err:", err);
    process.exit(1);
  });
