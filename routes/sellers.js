const router = require("express").Router();
const {
  getOne,
  getAll,
  add,
  update,
  remove,
} = require("../controllers/sellers");
const { authCheck, adminCheck } = require("../middleware/auth");

// GET all sellers info
router.get("/", authCheck, adminCheck, getAll);

// GET seller info
router.get("/:sellerId", authCheck, adminCheck, getOne);

// CREATE seller info
router.post("/", authCheck, adminCheck, add);

// UPDATE seller info
router.put("/:sellerId", authCheck, adminCheck, update);

// DELETE seller info
router.delete("/:sellerId", authCheck, adminCheck, remove);

module.exports = router;
