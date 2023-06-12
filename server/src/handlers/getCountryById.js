const getCountryByIdController = require("../controllers/getCountryByIdController");

const getCountryById = async (req, res) => {
  const { id } = req.params;

  try {
    const countryDetail = await getCountryByIdController(id);
    if (!countryDetail) throw new Error("Country not found.");
    res.status(200).json(countryDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountryById;
