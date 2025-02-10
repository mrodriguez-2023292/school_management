import Student from "../student/student.model.js"
import Teacher from "../teacher/teacher.model.js"
import { hash } from "argon2"

export const registerStudent = async (req, res) => {
    try{
        const data = req.body

        const encryptedPassword = await hash(data.password)
        data.password = encryptedPassword

        const student = await Student.create(data)
        return res.status(201).json({
            message: "Student has been registered",
            name: student.name,
            email: student.email
        })
    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            message: "Student registration failed",
            error: err.message
        })
    }
}

export const registerTeacher = async (req, res) => {
    try{
        const data = req.body

        const encryptedPassword = await hash(data.password)
        data.password = encryptedPassword

        const teacher = await Teacher.create(data)
        return res.status(201).json({
            message: "Teacher has been registered",
            name: teacher.name,
            email: teacher.email
        })
    }catch(err){
        console.log(err.message)
        return res.status(500).json({
            message: "Teacher registration failed",
            error: err.message
        })
    }
}