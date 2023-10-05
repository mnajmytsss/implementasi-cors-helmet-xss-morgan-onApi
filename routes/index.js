const { Router } = require("express");
const bookRoutes = require("./bookRoutes");
const dashboardRoutes = require("./dashboardRoutet");

const router = Router();

router.use("/", dashboardRoutes);
router.use("/api/books", bookRoutes);

module.exports = router;
