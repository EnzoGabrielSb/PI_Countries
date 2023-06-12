const { Activity } = require("../db");

const getActivitiesController = async () => {
  const activities = await Activity.findAll();
  return activities;
};

module.exports = getActivitiesController;
