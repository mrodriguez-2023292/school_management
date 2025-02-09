import { check } from "express-validator";
import { existEmail } from "../helpers/db-validators.js";
import { validateFields } from "./validate-fields.js";

export const registerValidator = [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Ingrese un correo válido").isEmail(),
    check("email").custom(existEmail),
    validateFields
]