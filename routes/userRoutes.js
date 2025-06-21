const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyToken, hasRole } = require("../middlewares/authMiddleware");

router.get("/:id", verifyToken, userController.getUserById);
router.put("/:id", verifyToken, userController.updateUser);
router.delete("/:id", verifyToken, hasRole("admin"), userController.deleteUser);
router.get("/", verifyToken, hasRole("admin"), userController.listUsers);

module.exports = router;
