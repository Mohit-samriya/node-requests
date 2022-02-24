const express = require("express");
const postController = require("../controllers/post");


const router = express.Router();

router.get("/", postController.getDetail);
router.post("/", postController.addStudent);
router.put("/:id", postController.updateStudent);
router.delete("/", postController.deleteStudent);



module.exports = router;