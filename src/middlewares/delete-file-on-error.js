import fs from "fs/promises"
import { join } from "path"

export const deleteFileOnError = async (err, req, res, next) =>{
    if(req.file && req.filePath){
        const filePath = join(req.filePath, req.file.filename)
        try{
            await fs.unlink(filePath)
        }catch(unlinkErr){
            console.log(`Error al eliminar el archivo ${unlinkErr}`)
        }
    }
    if(err.status === 400 || err.errors){
        return res.status(400).json({
            succes: false,
            errors: err.errors
        })
    }

    return res.status(500).json({
        succes: false,
        message: err.message
    })
}