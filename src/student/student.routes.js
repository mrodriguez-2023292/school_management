import { Router } from "express";
import { getStudentByIdValidator, deleteStudentValidator } from "../middlewares/studentCheck-validator.js";
import { getStudentById, getStudents, deleteStudent, updateStudent } from "./student.controller.js";

const router = Router()

router.get("/findStudent/:uid", getStudentByIdValidator, getStudentById)

router.get("/", getStudents)

router.delete("/deleteStudent/:uid", deleteStudentValidator, deleteStudent)

router.put("/updateStudent/:uid", updateStudent)

export default router