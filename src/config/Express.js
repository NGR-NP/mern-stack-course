const express = require("express");
const routes = require("../../src/routes/routes");
const cors = require("cors");
const errorHandler = require("../middleware/errorhandler");
const routenotavailable = require("../routes/lost.routes");
const corsOptions = require("../utils/corsOptions");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const accessControl = require("../middleware/accessControl");
const app = express();

app.use(accessControl);
// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", routes);

app.use(errorHandler);

app.use("*", routenotavailable);

module.exports = app;
