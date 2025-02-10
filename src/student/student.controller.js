import { hash, verify } from "argon2"
import Student from "./student.model.js"
import { uploadStudentPicture } from "../middlewares/multer-upload.js";


export const getStudentById = async(req, res) => {
    try{
        const { uid } = req.params
        const student = await Student.findById(uid)

        if(!student){
            return res.status(404).json({
                success: false,
                message: "Estudiante no existe",
                error: err.message
            })
        }

        return res.status(200).json({
            success: true,
            student
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener el estudiante",
            error: err.message
        })
    }
}

export const getStudents = async(req, res) => {
    try{
        const { limits = 5, from = 0} = req.query
        const query = {status: true}

        const [ total, students ] = await Promise.all([
            Student.countDocuments(query),
            Student.find(query)
                .skip(Number(from))
                .limit(Number(limits))
        ])

        return res.status(200).json({
            success: true,
            total,
            students
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al listar los estudiantes",
            error: err.message
        })
    }
}

export const deleteStudent = async (req, res) => {
    try{
        const { uid } = req. params

        const student =  await Student.findByIdAndUpdate(uid, {status: false}, {new: true})

        return res.status(200).json({
            success: true,
            message: "Estudiante Eliminado",
            student
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el estudiante",
            error: err.message
        })
    }
}

export const updateStudent = [
    uploadStudentPicture.single('profilePicture'),
    async (req, res) => {
        try {
            const { uid } = req.params;
            const { name, surname, username, email, phone, password } = req.body;

            let updateData = {};

            if (name) updateData.name = name;
            if (surname) updateData.surname = surname;
            if (username) updateData.username = username;
            if (email) updateData.email = email;
            if (phone) updateData.phone = phone;

            if (req.file) {
                updateData.profilePicture = req.file.filename;
            }

            if (password) {
                updateData.password = await hash(password);
            }

            const updatedStudent = await Student.findByIdAndUpdate(uid, updateData, { new: true });

            if (!updatedStudent) {
                return res.status(404).json({ message: "Estudiante no encontrado" });
            }

            return res.status(200).json({
                message: "Estudiante actualizado correctamente",
                student: updatedStudent
            });

        } catch (err) {
            return res.status(500).json({
                message: "Error al actualizar el estudiante",
                error: err.message
            });
        }
    },
];
