import { Router } from "express";
import { registerStudent } from "./auth.controller.js";
import { registerTeacher } from "./auth.controller.js";
import { registerValidator } from "../middlewares/check-validator.js";
import { uploadStudentPicture } from "../middlewares/multer-upload.js";
import { uploadTeacherPicture } from "../middlewares/multer-upload.js";
import { deleteFileOnError } from "../middlewares/delete-file-on-error.js";

const router = Router()

router.post("/registerStudent", uploadStudentPicture.single("profilePicture"), registerValidator, deleteFileOnError, registerStudent)
router.post("/registerTeacher", uploadTeacherPicture.single("profilePicture"), registerValidator, deleteFileOnError, registerTeacher)

export default router