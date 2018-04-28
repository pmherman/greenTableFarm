const router = require("express").Router();
const thumbnailRoutes = require("./thumbnail");
const cafeRoutes = require("./cafe");
const userRoutes = require("./user");

// Thumbnail routes
router.use("/thumbnail", thumbnailRoutes);
router.use("/cafe", cafeRoutes);
router.use("/user", userRoutes);

module.exports = router;
