const router = require("express").Router();
const thumbnailRoutes = require("./thumbnail");
const cafeRoutes = require("./cafe")

// Thumbnail routes
router.use("/thumbnail", thumbnailRoutes);
router.use("/cafe", cafeRoutes);

module.exports = router;
