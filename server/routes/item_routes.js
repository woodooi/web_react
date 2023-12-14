const itemController = require("../controller/item_controller");
const router = require("express").Router();

// Retrieve all itemss
router.get("/planes", itemController.findAll);

// Retrieve a single item with id
router.get("/planes/:id", itemController.findOne);

// Retrieve filtered list
router.get("/filtered", itemController.filtered)

module.exports = router;
