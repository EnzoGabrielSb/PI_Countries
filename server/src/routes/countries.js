const { Router } = require("express");

const getCountriesHandler = require("../handlers/getCountriesHandler");
const getCountryByNameHandler = require("../handlers/getCountryByName");
const getCountryById = require("../handlers/getCountryById");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/name", getCountryByNameHandler);

countriesRouter.get("/:id", getCountryById);

module.exports = countriesRouter;
