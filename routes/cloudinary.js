const router = require("express").Router();

const { upload, remove } = require("../controllers/cloudinary");

// routes
router.post("/uploadimages", upload);
router.post("/removeimage", remove);

module.exports = router;
