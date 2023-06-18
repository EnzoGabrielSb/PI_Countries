const { Router } = require("express");

const getActivities = require("../handlers/getActivitiesHandler");
const postActivityHandler = require("../handlers/postActivityHandler");
const validateActivity = require("../validateActivity/validateActivity");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivities);
activitiesRouter.post("/", postActivityHandler);

module.exports = activitiesRouter;
