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
  
  const round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
  }

  const formatRet = (initNum, initUnit, returnNum, returnUnit) => {
    return {
      initNum: round(initNum, 5),
      initUnit,
      returnNum: round(returnNum, 5),
      returnUnit
    }
  }
  
  const GAL_L  = 3.78541
  const LBS_KG = 0.453592
  const MI_KM  = 1.60934

  const unitConversion = {
    'l':   m => formatRet(m, 'L',   m / GAL_L,  'gal'),
    'gal': m => formatRet(m, 'gal', m * GAL_L,  'L'),
    'lbs': m => formatRet(m, 'lbs', m * LBS_KG, 'kg'),
    'kg':  m => formatRet(m, 'kg',  m / LBS_KG, 'lbs'),
    'km':  m => formatRet(m, 'km',  m / MI_KM,  'mi'),
    'mi':  m => formatRet(m, 'mi',  m * MI_KM,  'km')
  }
  
  const unitName = {
    'l':   'liters',
    'gal': 'gallons',
    'lbs': 'pounds',
    'kg':  'kilograms',
    'km':  'kilometers',
    'mi':  'miles'
  }

  this.getNum = function(input) {
    var result = input.match(numRx)[0];
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result = input.match(numRx)[0];
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = Object.prototype.hasOwnProperty(unitConversion, initUnit) 
    ? unitConversion[initUnit.toLowerCase()](0).returnUnit : null;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result = Object.prototype.hasOwnProperty(unitName, unit) 
    ? unitName[unit.toLowerCase()] : null;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {    
    const numMatch = initNum.match(numRx)
    const num = numMatch && numMatch[2] ? numMatch[4] ? (numMatch[2] / numMatch[4]) : numMatch[2] : 1
    
    var result = Object.prototype.hasOwnProperty(unitConversion, initUnit) 
    ? unitConversion[initUnit.toLowerCase()](initNum).returnNum : null;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${ initNum } ${ unitName[initUnit.toLowerCase()] } converts to ${ returnNum } ${ unitName[returnUnit.toLowerCase()] }`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
