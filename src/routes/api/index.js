const express = require("express");
const router = express.Router();


router.use("/users", require("./users"));
router.use("/news", require("./articles"));


module.exports = router;
