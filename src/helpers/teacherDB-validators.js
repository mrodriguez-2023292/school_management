import Teacher from "../teacher/teacher.model.js"

export const existEmail = async(email = '') => {
    const exist = await Teacher.findOne({email})
    if(exist){
        throw new Error(`El email ${email} ya fue registrado previamente`)
    }
}

export const existUsername = async(username = '') => {
    const exist = await Teacher.findOne({username})
    if(exist){
        throw new Error(`El username ${username} ya fue registrado previamente`)
    }
}

export const teachersExists = async(uid = '') => {
    const exist = await Teacher.findOne({uid})
    if(exist){
        throw new Error("El maestro no existe")
    }
}