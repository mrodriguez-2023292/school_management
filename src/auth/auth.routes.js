import { Router } from "express";
import { registerStudent, registerTeacher, loginStudent, loginTeacher } from "./auth.controller.js";
import { registerValidator, loginValidator } from "../middlewares/studentCheck-validator.js";
import { uploadStudentPicture } from "../middlewares/multer-upload.js";
import { uploadTeacherPicture } from "../middlewares/multer-upload.js";

const router = Router()

router.post("/registerStudent", uploadStudentPicture.single("profilePicture"), registerValidator, registerStudent)
router.post("/registerTeacher", uploadTeacherPicture.single("profilePicture"), registerValidator, registerTeacher)

router.post("/loginStudent", loginValidator, loginStudent)
router.post("/loginTeacher", loginValidator, loginTeacher)

export default router