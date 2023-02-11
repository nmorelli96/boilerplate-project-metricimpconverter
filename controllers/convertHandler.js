function ConvertHandler() {
  this.getNum = function (input) {
    input = input.toString();
    let regexLett = /^[a-z]+$/i;
    let regexInt = /^[0-9]+[a-z]+$/i;
    let regexDec = /^[0-9]+\.[0-9]+[a-z]+$/i;
    let regexFrac = /^[0-9]+\/[0-9]+[a-z]+$/i;
    let regexFracNumDec = /^[0-9]+\.[0-9]+\/[0-9]+[a-z]+$/i;
    let regexFracDenomDec = /^[0-9]+\/[0-9]+\.[0-9]+[a-z]+$/i;
    let regexFracDoubleDec = /^[0-9]+\.[0-9]+\/[0-9]+\.[0-9]+[a-z]+$/i;

    let inputStr = "";
    let inputArr = [];

    if (
      regexInt.test(input) ||
      regexDec.test(input) ||
      regexFrac.test(input) ||
      regexFracNumDec.test(input) ||
      regexFracDenomDec.test(input) ||
      regexFracDoubleDec.test(input)
    ) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].match(/[0-9\.\/]/gi)) {
          inputArr.push(input[i]);
        } else {
          inputStr = inputArr.join("");
          return eval(inputStr);
        }
      }
    } else if (regexLett.test(input)) {
      return 1;
    } else return "invalid number";
  };

  this.getUnit = function (input) {
    let inputStr = "";
    let inputArr = [];
    if (input.matchAll(/[0-9.a-z\/]/gi)) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].match(/[a-z]/gi)) {
          inputArr.push(input[i]);
        }
      }
      inputStr = inputArr.join("");
      if (
        inputStr.toLowerCase() === "gal" ||
        inputStr.toLowerCase() === "l" ||
        inputStr.toLowerCase() === "lbs" ||
        inputStr.toLowerCase() === "kg" ||
        inputStr.toLowerCase() === "mi" ||
        inputStr.toLowerCase() === "km"
      ) {
        return inputStr.toLowerCase();
      } else return "invalid unit";
    } else return "invalid unit";
  };

  this.getReturnUnit = function (initUnit) {
    initUnit = initUnit.toLowerCase();
    switch (initUnit) {
      case "gal":
        return "L";
      case "l":
        return "gal";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      case "mi":
        return "km";
      case "km":
        return "mi";
      default:
        return "invalid";
    }
  };

  this.spellOutUnit = function (unit) {
    unit = unit.toLowerCase();
    switch (unit) {
      case "gal":
        return "gallons";
      case "l":
        return "liters";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      default:
        return "invalid";
    }
  };

  this.convert = function (initNum, initUnit) {
    initUnit = initUnit.toLowerCase();
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch (initUnit) {
      case "gal":
        return parseFloat((initNum * galToL).toFixed(5));
      case "l":
        return parseFloat((initNum / galToL).toFixed(5));
      case "lbs":
        return parseFloat((initNum * lbsToKg).toFixed(5));
      case "kg":
        return parseFloat((initNum / lbsToKg).toFixed(5));
      case "mi":
        return parseFloat((initNum * miToKm).toFixed(5));
      case "km":
        return parseFloat((initNum / miToKm).toFixed(5));
      default:
        return "invalid";
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${this.convert(initNum, initUnit)} ${this.spellOutUnit(
      returnUnit
    )}`;
  };
}

module.exports = ConvertHandler;
