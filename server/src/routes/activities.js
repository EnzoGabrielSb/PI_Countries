const { Router } = require("express");

const getActivities = require("../handlers/getActivitiesHandler");
const postActivity = require("../handlers/postActivityHandler");
const deleteActivity = require("../handlers/deleteActivityHandler");
const validateActivity = require("../validateActivity/validateActivity");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivities);
activitiesRouter.post("/", validateActivity, postActivity);
activitiesRouter.delete("/:id", deleteActivity);

module.exports = activitiesRouter;
