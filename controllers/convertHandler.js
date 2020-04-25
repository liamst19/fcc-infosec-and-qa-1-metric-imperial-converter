/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const measureRx = /^([-]?([0-9]+[,.]?[0-9]*)([\/]([0-9]+[,.]?[0-9]*))?)?(gal|L|lbs|kg|km|mi)$/
  const numRx = /^([-]?([0-9]+[,.]?[0-9]*)([\/]([0-9]+[,.]?[0-9]*))*)/
  const unitRx = /(gal|L|lbs|kg|km|mi)$/i
  
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
    var result = measureRx.test(input) ? input.match(measureRx)[1] ? input.match(measureRx)[1] : 1 : null;
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result = unitRx.test(input) ? input.match(unitRx)[0] : null;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if(!initUnit) return null
    
    var result = unitConversion.hasOwnProperty(initUnit.toLowerCase()) 
    ? unitConversion[initUnit.toLowerCase()](1).returnUnit : null;
    return result;
  };

  this.spellOutUnit = function(unit) {
    if(!unit) return null
    
    var result = unitName.hasOwnProperty(unit.toLowerCase()) 
    ? unitName[unit.toLowerCase()] : null;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) { 
    if(!initNum || !initUnit) return null
    
    const numMatch = initNum.toString().match(numRx)
    const num = numMatch && numMatch[2] ? numMatch[4] ? (numMatch[2] / numMatch[4]) : numMatch[2] : 1
    
    var result = unitConversion[initUnit.toLowerCase()](initNum).returnNum;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if(!returnNum || !returnUnit || !initUnit) return null
    
    var result = `${ initNum } ${ unitName[initUnit.toLowerCase()] } converts to ${ returnNum } ${ unitName[returnUnit.toLowerCase()] }`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
