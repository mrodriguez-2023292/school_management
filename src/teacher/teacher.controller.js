import Teacher from "./teacher.model.js"
import Course from "./course.model.js"
import mongoose from "mongoose";

export const getTeachers = async(req, res) => {
    try{
        const { limits = 5, from = 0} = req.query
        const query = {status: true}

        const [ total, teachers ] = await Promise.all([
            Teacher.countDocuments(query),
            Teacher.find(query)
                .skip(Number(from))
                .limit(Number(limits))
        ])

        return res.status(200).json({
            success: true,
            total,
            teachers
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al listar los maestros",
            error: err.message
        })
    }
}

export const createCourse = async (req, res) => {
    try {
        const { name, uid } = req.body;

        const teacher = await Teacher.findById(uid);
        if (!teacher) {
            return res.status(404).json({ message: "Maestro no encontrado" });
        }

        const newCourse = new Course({ name, teacher: uid });
        await newCourse.save();

        return res.status(201).json({ message: "Curso creado exitosamente", newCourse });
    } catch (err) {
        return res.status(500).json({ message: "Error al crear curso", error: err.message });
    }
};

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()
            .populate({
                path: "teacher",
                select: "name"
            })
            .populate({
                path: "students",
                select: "name"
            });

        return res.status(200).json({
            message: "Cursos disponibles",
            courses
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error al obtener cursos",
            error: err.message
        });
    }
};

export const updateCourse = [
    async (req, res) => {
        try {
            const { courseId } = req.params;
            const { name } = req.body;

            let updateData = {};

            if (name) updateData.name = name;

            const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, { new: true });

            if (!updatedCourse) {
                return res.status(404).json({ message: "Curso no encontrado" });
            }

            return res.status(200).json({
                message: "Curso actualizado correctamente",
                course: updatedCourse
            });
        } catch (err) {
            return res.status(500).json({
                message: "Error al actualizar el curso",
                error: err.message
            });
        }
    }
];

export const deleteCourse = async (req, res) => {
    try {
        const { courseId } = req.params;

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ message: "Curso no encontrado" });
        }

        const updatedCourse = await Course.findByIdAndUpdate(courseId, { status: false }, { new: true });

        await Student.updateMany(
            { courses: courseId },
            { $pull: { courses: courseId } }
        );

        return res.status(200).json({
            success: true,
            message: "Curso desactivado y estudiantes desasignados",
            course: updatedCourse
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al desactivar el curso",
            error: err.message
        });
    }
};

export const getCourses = async (req, res) => {
    try {
        const { limits = 5, from = 0 } = req.query;
        const query = { teacher: req.params.uid };

        const [total, courses] = await Promise.all([
            Course.countDocuments(query),
            Course.find(query)
                .skip(Number(from))
                .limit(Number(limits))
        ]);

        if (courses.length === 0) {
            return res.status(404).json({ message: "El profesor no tiene cursos asignados" });
        }

        return res.status(200).json({
            success: true,
            total,
            courses
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los cursos",
            error: err.message
        });
    }
};

