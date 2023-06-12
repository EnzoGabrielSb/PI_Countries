const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountryByNameController = async (name) => {
  if (name) {
    const filter = await Country.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
      },
      include: {
        model: Activity,
        attibutes: ["id", "name"],
        through: {
          attibutes: [],
        },
      },
    });

    if (filter.length) {
      return filter;
    }
    throw new Error("Fallo algo Master");
  }
};

module.exports = getCountryByNameController;
