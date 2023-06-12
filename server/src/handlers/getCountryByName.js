const getCountryByNameController = require("../controllers/getCountryByNameController");

const getCountryByName = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) throw new Error("Name not entered");
    const searchByName = await getCountryByNameController(name);
    if (!searchByName.length) throw new Error("Pais no encontrado");
    res.status(200).json(searchByName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountryByName;
