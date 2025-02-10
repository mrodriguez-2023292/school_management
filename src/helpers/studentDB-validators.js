import Student from "../student/student.model.js"

export const existEmail = async(email = '') => {
    const exist = await Student.findOne({email})
    if(exist){
        throw new Error(`El email ${email} ya fue registrado previamente`)
    }
}

export const existUsername = async(username = '') => {
    const exist = await Student.findOne({username})
    if(exist){
        throw new Error(`El username ${username} ya fue registrado previamente`)
    }
}

export const studentsExists = async(uid = '') => {
    const exist = await Student.findOne({uid})
    if(exist){
        throw new Error("El estudiante no existe")
    }
}