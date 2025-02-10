import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true
    },

    description: {
        type: String,
        required: [true, "Description is required"],
    },

    teacher: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Teacher", 
        required: true 
    },

    students: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Student" 
    }]
},
{
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Course", courseSchema);
