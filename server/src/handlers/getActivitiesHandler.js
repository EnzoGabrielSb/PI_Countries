const getActivitiesController = require("../controllers/getActivitiesController");

const getActivities = async (req, res) => {
  try {
    const allActivities = await getActivitiesController();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getActivities;
