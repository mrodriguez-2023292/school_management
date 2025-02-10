import { Schema, model } from "mongoose";

const studentSchema = Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot exceed 25 characters"]
    },

    surname:{
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot exceed 25 characters"]
    },

    username:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true,
        minLength: 8
    },

    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true
    },

    phone:{
        type: String,
        required: true,
        minLength: 8,
        maxLength: 8
    },

    role:{
        type: String,
        required: true,
        default: "STUDENT_ROLE"
    },

    profilePicture:{
        type: String
    },

    status:{
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})

studentSchema.methods.toJSON = function(){
    const { password, _id, ...student } = this.toObject()
    student.uid = _id
    return student
}

export default model("Student", studentSchema)