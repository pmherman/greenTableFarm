const router = require("express").Router();
const cafeController = require("../../controllers/cafeController");

// Matches with "/api/thumbnail"
router.route("/")
  .get(cafeController.findAll)
  .post(cafeController.create);

// Matches with "/api/thumbnail/:id"
router
  .route("/:id")
  .get(cafeController.findById)
  .put(cafeController.update)
  .delete(cafeController.remove);

module.exports = router;
