const router = require("express").Router();
const thumbnailRoutes = require("./thumbnail");

// Thumbnail routes
router.use("/thumbnail", thumbnailRoutes);

module.exports = router;
