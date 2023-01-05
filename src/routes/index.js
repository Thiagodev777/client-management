const app = require("express");
const router = app.Router();
const userController = require("../controllers/userController");

router.get("/", userController.listagem);
// router.get("/", userController);
// router.post("", userController);
// router.put("", userController);
// router.delete("", userController);

module.exports = router;
