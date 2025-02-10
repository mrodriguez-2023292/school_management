import User from "../student/student.model.js"

export const existEmail = async(email = '') => {
    const exist = await User.findOne({email})
    if(exist){
        throw new Error(`El email ${email} ya fue registrado previamente`)
    }
}