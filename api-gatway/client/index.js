"use strict";
// const client = require("./client");
const express = require("express");
const bodyParser = require("body-parser");
const mainroute=require("../client/routes/route");
const app = express();
app.use("/",mainroute);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log("Server running at port %d", PORT);
});