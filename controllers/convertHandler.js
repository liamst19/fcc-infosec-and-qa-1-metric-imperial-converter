/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const numRx = /^([-]?([0-9]+[,.]?[0-9]*)([\/]([0-9]+[,.]?[0-9]*))*)/
  const unitRx = /(gal|L|lbs|kg|km|mi)$/
  
  const formatRet = (initNum, initUnit, returnNum, returnUnit) => {
    return {
      initNum: round(initNum, 5),
      initUnit,
      returnNum: round(returnNum, 5),
      returnUnit
    }
  }

  const unitConversion = {
    'l':   m => formatRet(m, 'L',   m / GAL_L,  'gal'),
    'gal': m => formatRet(m, 'gal', m * GAL_L,  'L'),
    'lbs': m => formatRet(m, 'lbs', m * LBS_KG, 'kg'),
    'kg':  m => formatRet(m, 'kg',  m / LBS_KG, 'lbs'),
    'km':  m => formatRet(m, 'km',  m / MI_KM,  'mi'),
    'mi':  m => formatRet(m, 'mi',  m * MI_KM,  'km')
  }


  this.getNum = function(input) {
    var result = numRx.match(input)[0];
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result = unitRx.match(input)[0];
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = Object.prototype.hasOwnProperty(unitConversion, initUnit) 
    ? unitConversion[initUnit.toLowerCase()] : 'invalid unit';
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
