const router = require("express").Router();
const {
  getOne,
  getAll,
  add,
  update,
  remove,
} = require("../controllers/sellers");

// GET all sellers info
router.get("/", getAll);

// GET seller info
router.get("/:id", getOne);

// CREATE seller info
router.post("/", add);

// UPDATE seller info
router.put("/:id", update);

// DELETE seller info
router.delete("/:id", remove);

module.exports = router;
