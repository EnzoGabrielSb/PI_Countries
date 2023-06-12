const { Router } = require("express");

const getActivities = require("../handlers/getActivitiesHandler");
const postActivity = require("../handlers/postActivityHandler");
const validateActivity = require("../validateActivity/validateActivity");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivities);
activitiesRouter.post("/", validateActivity, postActivity);

module.exports = activitiesRouter;
