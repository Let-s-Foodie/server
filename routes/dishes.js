const router = require("express").Router();
const { getAll, add, update, remove } = require("../controllers/dishes");

// GET all dishes
router.get("/", getAll);

// CREATE dishes
router.post("/", add);

// UPDATE dishes
router.put("/:id", update);

// DELETE dishes
router.delete("/:id", remove);

module.exports = router;
