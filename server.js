const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { sequelize } = require("./models");
const randomFeedRoutes = require("./routes/randomfeed");
const dishesRoutes = require("./routes/dishes");
const sellersRoutes = require("./routes/sellers");
const cloudnaryRoutes = require("./routes/cloudinary");
require("dotenv").config();

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

server.use("/random", randomFeedRoutes);
server.use("/dishes", dishesRoutes);
server.use("/sellers", sellersRoutes);
server.use("/image",cloudnaryRoutes);
const port = process.env.PORT || 5000;

server.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await sequelize.authenticate();
  console.log("Database is Connected!");
});
