const express = require("express");
const Routes = require("../../src/routes/routes");
const cors = require("cors");
const errorHandler = require("../middleware/errorhandler");
const routenotavailable = require("../routes/routenotavailable");
const corsOptions = require("../utils/whitelist");
const app = express();

// middleware to handel urlencoded data, content-type: application/x-www-from-urlencoded
https://www.geeksforgeeks.org/express-js-express-urlencoded-function/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors(corsOptions));

// api first path
app.use("/api", Routes);

app.use(errorHandler);

app.use("*", routenotavailable);

module.exports = app;
