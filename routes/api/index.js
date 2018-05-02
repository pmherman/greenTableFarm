const router = require("express").Router();
const thumbnailRoutes = require("./thumbnail");
const cafeRoutes = require("./cafe");
<<<<<<< HEAD
const userRoutes = require("./User");
=======
const userRoutes = require("./user");
>>>>>>> master
const authRoutes = require("./auth_routes");

// Thumbnail routes
router.use("/thumbnail", thumbnailRoutes);
router.use("/cafe", cafeRoutes);
router.use("/user", userRoutes);
router.use("/authroutes", authRoutes);
<<<<<<< HEAD
=======

>>>>>>> master

module.exports = router;
