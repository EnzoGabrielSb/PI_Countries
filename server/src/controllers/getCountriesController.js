const { Country, Activity } = require("../db");
const axios = require("axios");

const getCountriesControllers = async () => {
  try {
    let api = await axios.get("http://localhost:5000/countries");
    api = api.data?.map((e) => {
      return {
        id: e.cca3,
        name: e.name.common,
        flag: e.flag,
        continent: e.continents[0],
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
      };
    });
    api = api.filter((e) => e.name !== "Moldova");

    let bdd = await Country.findAll();
    if (!bdd.length) {
      await Country.bulkCreate(api);
    }
    let db = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    db = db.map((e) => {
      return {
        id: e.id,
        name: e.name,
        flag: e.flag,
        continent: e.continent,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
        activity: e.activities?.map((el) => el.name),
      };
    });
    return db;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getCountriesControllers;
