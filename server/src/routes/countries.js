const { Router } = require("express");

const getCountriesHandler = require("../handlers/getCountriesHandler");
const getCountryById = require("../handlers/getCountryById");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:id", getCountryById);

module.exports = countriesRouter;
