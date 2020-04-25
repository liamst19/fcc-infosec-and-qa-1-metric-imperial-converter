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
  
  var convertHandler = new ConvertHandler();
  
  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      const retObj = {
        initNum, initUnit, returnNum, returnUnit, string: toString
      }
      
      //res.json
      if(!returnUnit && !returnNum) res.json({error: 'invalid number and unit'})
      else if(!returnUnit) res.json({error: 'invalid unit'})
      else if(!returnNum) res.json({error: 'invalid number'})
    
      res.json({
        initNum, initUnit, returnNum, returnUnit, string: toString
      })
    });
    
};
