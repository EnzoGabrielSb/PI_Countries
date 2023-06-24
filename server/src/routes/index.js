const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require("./countries");
const activitiesRouter = require("./activities");

const router = Router();

// Estas seran las dos rutas principales que manejara el servidor.

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;
