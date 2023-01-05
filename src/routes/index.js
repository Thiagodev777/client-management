const app = require("express");
const router = app.Router();
const userController = require("../controllers/userController");

// User Routes
router.get("/home", userController.home);

module.exports = router;
