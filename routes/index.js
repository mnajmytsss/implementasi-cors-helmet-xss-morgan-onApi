const { Router } = require("express");
const bookRoutes = require("./bookRoutes");
const dashboardRoutes = require("./dashboardRoutet");
const preventAttackController = require("./preventAttackRoutes")

const router = Router();

router.use("/", dashboardRoutes);
router.use("/api/attack", preventAttackController)
router.use("/api/books", bookRoutes);

module.exports = router;