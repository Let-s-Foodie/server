const router = require("express").Router();
const {
  getAll,
  getOne,
  add,
  update,
  remove,
} = require("../controllers/dishes");
const { authCheck, adminCheck } = require("../middleware/auth");

// GET all dishes
router.get("/", authCheck, adminCheck, getAll);

// GET dish
router.get("/:id", authCheck, adminCheck, getOne);
// CREATE dishes
router.post("/", authCheck, adminCheck, add);

// UPDATE dishes
router.put("/:id", authCheck, adminCheck, update);

// DELETE dishes
router.delete("/:id", authCheck, adminCheck, remove);

module.exports = router;
