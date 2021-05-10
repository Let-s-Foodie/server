const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const randomFeedRoutes = require('./routes/randomfeed');

require("dotenv").config();

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

const port = process.env.PORT || 5000;


server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
server.use('/random',randomFeedRoutes);
server.listen(port, () => console.log(`Server is running on port ${port}`));