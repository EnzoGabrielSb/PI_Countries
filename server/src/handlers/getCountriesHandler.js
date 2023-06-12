const getCountriesControllers = require("../controllers/getCountriesController");
const getCountryByNameController = require("../controllers/getCountryByNameController");

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const response = name
      ? await getCountryByNameController(name)
      : await getCountriesControllers();

    if (response.length < 1) throw new Error("Countries aren't available");
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountriesHandler;
