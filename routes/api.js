"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const { input } = req.query;
    if (!input) {
      return res.send("invalid unit");
    }
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    if (initNum === "invalid number" && initUnit === "invalid unit") {
      return res.send("invalid number and unit");
    }
    if (initUnit === "invalid unit") {
      return res.send("invalid unit");
    }
    if (initNum === "invalid number") {
      return res.send("invalid number");
    }

    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const stringRes = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    if (initUnit === "l") {
      return res.send({
        initNum: initNum,
        initUnit: "L",
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: stringRes,
      });
    } else
      return res.send({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: stringRes,
      });
  });
};
