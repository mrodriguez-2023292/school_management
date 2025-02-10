import { Router } from "express";
import { deleteTeacherValidator } from "../middlewares/teacherCheck-validator.js";
import { createCourse, updateCourse, deleteCourse, getCourses, getTeachers } from "./teacher.controller.js";

const router = Router()

router.get("/listTeachers", getTeachers)

router.post("/createCourse", createCourse)

router.put("/updateCourse/:uid", updateCourse)

router.delete("/deleteCourse/:uid", deleteTeacherValidator, deleteCourse)

router.get("/", getCourses)


export default router