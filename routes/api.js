/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      res.json(ConvertHandler.convert(input))      
      //res.json
    });
    
};
