const app = require("express");
const router = app.Router();
const userController = require("../controllers/userController");

// User Routes
router.get("/users", userController.home);
router.get("/users/new", userController.newUser);
router.post("/user/save", userController.saveUser);

module.exports = router;
