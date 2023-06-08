"use strict";
const { request } = require("express");
const client = require("../client");

exports.createUser = (request, res, next) => {
  const firstName=request.query;
  const lastName=request.query;
  const email=request.query;
  const age=request.query;
  const location=request.query;
  client.create((firstName,lastName,email,age,location),(error, response) => {
    if (error) {
      res.status(401).send(error);
    } else {
      res.status(200).send(response);
    }
  });
};

exports.testUser = (req, res, next) => {
  res.send("This route is working...");
};
