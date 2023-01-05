const express = require("express");
const Routes = require("../../src/routes/routes");
const cors = require("cors");
const errorHandler = require("../middleware/errorhandler");
const routenotavailable = require("../routes/lost.routes");
const corsOptions = require("../utils/whitelist");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(corsOptions));
app.use(cors());

app.use("/api", Routes);

app.use(errorHandler);

app.use("*", routenotavailable);

module.exports = app;
