const router = require("express").Router();
const thumbnailRoutes = require("./thumbnail");
const cafeRoutes = require("./cafe");
const userRoutes = require("./User");

// Thumbnail routes
router.use("/thumbnail", thumbnailRoutes);
router.use("/cafe", cafeRoutes);
router.use("/User", userRoutes);

module.exports = router;
