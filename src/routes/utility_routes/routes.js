var express = require("express");
var router = express.Router();

const masterRoutes = require("../master_routes/master.routes");

// master data routes usage
router.use("/master/", masterRoutes);

module.exports = router;
