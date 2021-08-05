/*******************Importacion del CORE******************/
// |-> Request, Response
import { Request, Response } from 'express'
/****************Importacion de helpers***************/
// |-> JWT (helper)
import { generatorJWT } from '../helpers/jwt.helpers'
/******************Importacion del modelo**************/
import User from '../models/users.models'
/*********************Controladores*******************/
// |-> controlador para iniciar sesion
const sign_in = async( req: Request, res: Response ) => {
    // |-> Extracciondel telefono para comprobarlo o buscarlo en el sistema
    const { phone } = req.body
    // |-> Control de errores con el tryCatch
    try {
        
        // |-> Buscara el usuario por el telefono suministrado
        const findUserPhone = await User.findOne({phone})
        // |-> Si el usuario no existe
        if (!findUserPhone) {
            // |-> Retornara un status 404
            return res.status(404).json({
                success: false,
                msg: 'El usuario no fue encontradoen el sistema verifique que sea correcto el numero ingresado'
            })
        }
        // |-> Generara el token de acceso
        const token = await generatorJWT(findUserPhone.phone)        
        // |-> Dara una respuesta exitosa
        res.status(200).json({
            success: true,
            msg: `Bienvenido usuario ${findUserPhone.name}`,
            data: {
                token
            }
        })
    } catch (err) {
        // |-> Mostrara el error en consola
        console.log(err);
        // |-> respondera con un status 500
        return res.status(500).json({
            success: false,
            msg: 'Ocurrio un error en la peticion verifica los logs'
        })
    }
}
/*********************Exportar modulo********************/
export {
    sign_in
}