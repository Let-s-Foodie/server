const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server is running on port ${port}`));
