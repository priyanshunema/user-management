const router = require("express").Router();
const { createRole, assignRoles } = require("../controllers/roleController");
const { verifyToken, hasRole } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, hasRole("admin"), createRole);
router.post("/assign/:id", verifyToken, hasRole("admin"), assignRoles);

module.exports = router;
