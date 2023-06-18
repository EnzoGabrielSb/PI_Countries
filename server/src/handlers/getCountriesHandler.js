const getCountriesControllers = require("../controllers/getCountriesController");

const getCountriesHandler = async (req, res) => {
  try {
    const allCountries = await getCountriesControllers();
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountriesHandler;
