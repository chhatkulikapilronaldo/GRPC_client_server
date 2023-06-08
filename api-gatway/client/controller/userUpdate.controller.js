'use strict';
const { request } = require('express');
let client = require('../client')

 exports.updateUser = (request, res, next)=>{
  const id=request.query;
  const firstName=request.query;
  const lastName=request.query;
  const email=request.query;
  const age=request.query;
 const location=request.query;
    client.update((id,firstName,lastName,email,age,location),(error, response) => {   
      
        if (error) {
          res.status(401).send(error)
        } else {
          res.status(200).send(response)
        }
      });
}

exports.testUser =  (req, res, next)=>{
    res.send("This route is working...")
}