import { body, param } from "express-validator";
import { existEmail, existUsername, teachersExists } from "../helpers/teacherDB-validators.js";
import { validateFields } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";


export const registerValidator = [
    body("name", "El nombre es obligatorio").not().isEmpty(),
    body("username", "El username es obligatorio").not().isEmpty(),
    body("email", "El correo es obligatorio").not().isEmpty(),
    body("email", "Ingrese un correo valido").isEmail(),
    body("email").custom(existEmail), 
    body("username").custom(existUsername),
    /*body("password").isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0
    }),*/
    validateFields,
    deleteFileOnError
]

export const loginValidator = [
    body("email").optional().isEmail().withMessage("Ingrese un correo válido"),
    body("username").optional().isString().withMessage("Ingrese un username válido"),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    validateFields,
    deleteFileOnError
]

export const deleteTeacherValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido"),
    param("uid").custom(teachersExists),
    validateFields,
    deleteFileOnError
]
