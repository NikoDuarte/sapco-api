/********************Imports del CORE******************/
// |-> Request, response (express)
import { Request, Response } from 'express'
// |-> jsonwebtoken (libreria)
import jwt, { JwtPayload } from 'jsonwebtoken'
/**************Imports de variables de entorno*************/
// |-> Clave JWT
import { JWT } from '../environment/environment.prod'
/*******************Middleware**********************/
// |-> Validar JWT (middleware)
const validar_jwt = async( req: Request | any, res: Response, next: any ) => {
    // |-> Capturar el token de la request header
    const token = req.header('Autorization')
    // |-> Validar si viene un token o no
    if (!token) {
        // |-> Si no viene un token respondera un 401 de Unauthorizate
        res.status(401).json({
            success: false,
            msg: 'Peticion no autorizada'
        })
    }
    // |-> Si existe el toquen haremos un procesador de errores tryCatch
    try {
        
        // |-> extraeremos el phone de la verificacion del token
        const { phone }: string | JwtPayload | any = await jwt.verify(String(token), String(JWT))
        // |-> Pasaremos en la request el phone
        req.phone = phone
        // |-> Si todo se cumple seguira adelante
        next()
    } catch (err) {
        // |-> Si hay un error se mostrara en consola
        console.log(err);
        // |-> Respondera un mensaje de error 500
        return res.status(500).json({
            success: false,
            msg: 'Ocurrio un problema en la validacion del token revisa los logs...'
        })
    }
}
/******************Exportacion de modulo****************/
export {
    validar_jwt
}