const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("should correctly read a whole number input", function () {
    assert.strictEqual(
      convertHandler.getNum("10kg"),
      10,
      "correctly read a whole number input"
    );
  });
  test("should correctly read a decimal number input", function () {
    assert.strictEqual(
      convertHandler.getNum("1.5kg"),
      1.5,
      "correctly read a decimal number input"
    );
  });
  test("should correctly read a fractional input", function () {
    assert.strictEqual(
      convertHandler.getNum("1/2kg"),
      0.5,
      "correctly read a fractional input"
    );
  });
  test("should correctly read a fractional input with a decimal", function () {
    assert.strictEqual(
      convertHandler.getNum("1/2.5kg"),
      0.4,
      "correctly read a fractional input with a decimal"
    );
  });
  test("should correctly return an error on a double-fraction (i.e. 3/2/3)", function () {
    assert.strictEqual(
      convertHandler.getNum("1/2/5kg"),
      "invalid number",
      "correctly return an error on a double-fraction"
    );
  });
  test("should default to a numerical input of 1 when no numerical input is provided", function () {
    assert.strictEqual(
      convertHandler.getNum("kg"),
      1,
      "default to a numerical input of 1 when no numerical input is provided"
    );
  });
  test("read each valid input unit", function () {
    assert.strictEqual(
      convertHandler.getUnit("kg"),
      "kg",
      "read each valid input unit"
    );
    assert.strictEqual(
      convertHandler.getUnit("10gal"),
      "gal",
      "read valid input unit"
    );
    assert.strictEqual(
      convertHandler.getUnit("1.5mi"),
      "mi",
      "read each valid input unit"
    );
    assert.strictEqual(
      convertHandler.getUnit("1/2km"),
      "km",
      "read each valid input unit"
    );
    assert.strictEqual(
      convertHandler.getUnit("1.5/3l"),
      "l",
      "read each valid input unit"
    );
    assert.strictEqual(
      convertHandler.getUnit("1.2/1.3lbs"),
      "lbs",
      "read each valid input unit"
    );
  });
  test("should return an error for an invalid input unit", function () {
    assert.strictEqual(
      convertHandler.getUnit("10"),
      "invalid unit",
      "return an error for an invalid input unit"
    );
  });
  test("should return the correct return unit for each valid input unit", function () {
    assert.strictEqual(
      convertHandler.getReturnUnit("kg"),
      "lbs",
      "return the correct return unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("gal"),
      "L",
      "return the correct return unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("mi"),
      "km",
      "return the correct return unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("km"),
      "mi",
      "return the correct return unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("l"),
      "gal",
      "return the correct return unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("lbs"),
      "kg",
      "return the correct return unit for each valid input unit"
    );
  });
  test("should return the spelled-out string unit for each valid input unit", function () {
    assert.strictEqual(
      convertHandler.spellOutUnit("kg"),
      "kilograms",
      "return the spelled-out string unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("gal"),
      "gallons",
      "return the spelled-out string unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("mi"),
      "miles",
      "return the spelled-out string unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("km"),
      "kilometers",
      "return the spelled-out string unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("L"),
      "liters",
      "return the spelled-out string unit for each valid input unit"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("lbs"),
      "pounds",
      "return the spelled-out string unit for each valid input unit"
    );
  });
  test("should convert gal to L", function () {
    assert.strictEqual(
      convertHandler.convert("2", "gal"),
      7.57082,
      "convert gal to L"
    );
  });
  test("should convert L to gal", function () {
    assert.strictEqual(
      convertHandler.convert("4", "l"),
      1.05669,
      "convert L to gal"
    );
  });
  test("should convert mi to km", function () {
    assert.strictEqual(
      convertHandler.convert("2", "mi"),
      3.21868,
      "convert mi to km"
    );
  });
  test("should convert km to mi", function () {
    assert.strictEqual(
      convertHandler.convert("3", "km"),
      1.86412,
      "convert km to mi"
    );
  });
  test("should convert lbs to kg", function () {
    assert.strictEqual(
      convertHandler.convert("150", "lbs"),
      68.0388,
      "convert lbs to kg"
    );
  });
  test("should convert kg to lbs", function () {
    assert.strictEqual(
      convertHandler.convert("0.5", "kg"),
      1.10231,
      "convert kg to lbs"
    );
  });
});
