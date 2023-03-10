const app = require("express");
const router = app.Router();
const userController = require("../controllers/userController");

// User Routes
router.get("/users", userController.home);
router.get("/users/new", userController.newUser);
router.post("/user/save", userController.saveUser);
router.post("/user/delete", userController.deleteUser);
router.get("/user/edit/:id", userController.userEdit);
router.post("/user/update", userController.updateUser);
router.get("/user", userController.searchUser);

module.exports = router;
