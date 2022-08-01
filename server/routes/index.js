const express = require("express");
const router = express.Router();
const FileController = require("../controllers/fileController");

router.post("/", FileController.uploadFile);
router.get("/", FileController.getFiles);

module.exports = router;
