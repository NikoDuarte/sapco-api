/*******************Importacion del CORE******************/
import { Request, Response } from 'express'
import request from 'request'
/********************Variable de entorno******************/
import { TWNEL_MSG, JWT_TWNEL } from '../environment/environment.prod'
/*******************Importar modelo*********************/
import Servicio from '../models/servicio.models'
import User from '../models/users.models'
/*********************Controladores Exportados*******************/
// |-> Ver servicio
/**
 * 
 */
// |-> Crear servicio
const create_service = async( req: Request | any, res: Response ) => {
    // |-> Capturar el telefono por el validador del token
    const phone = req.phone
    // |-> Capturar el cuerpo de la peticion
    const body = req.body
    // |-> Manejo de errores con tryCatch
    try {
        
        // |-> Se creara el servicio como clase 
        const servicioDB = new Servicio(body)
        // |-> Se guardara el servicio en el dbms
        servicioDB.save()
        // |-> Desestructurar la direccion de destino
        const {addresDestination} = body
        // |-> Se notificara por twnel a los que esten disponibles
        disponibleMsg(req, res, addresDestination)

    } catch (err) {
        // |-> Si hay un error lo mostrara por consola
        console.log(err);
        // |-> Respondera con estado 500
        return res.status(500).json({
            success: false,
            msg: 'Ocurrio un problema al procesar la peticion revisa los logs...'
        })
    }

    
}
/**************************Controladores no exportadas**************************/
// |-> Enviar mensaje tecnico disponible
const disponibleMsg = async(req: Request, res: Response, address: string) => {
    // |-> Se buscaran usuario donde el available sea true
    const findUsers = await User.find({available: "true"})
    // |-> Validar si hay usuarios disponibles
    if (!findUsers) {
        return res.status(404).json({
            success: false,
            msg: 'No hay usuario disponibles'
        })
    } 
    const user = findUsers.map(
        (values: any) => {
            // |-> Creamos un llamado http para conectar con twnel
            const options = {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JWT_TWNEL}`
                },
                body: JSON.stringify({
                    "to": values.phone,
                    "body": `${values.name}, tienes una solicitud disponible en ${address}`,
                    "mediaUrl": ""
                })
            }
            return options
        }
    )

    for (const i of user) {
        await request(String(TWNEL_MSG), i, (err, response) => {
            if(err) throw new Error(err);
            console.log(response.body);
        })
    }
    return res.status(200).json({
        success: true,
        msg: 'envio exitoso!'
    })
}
/*********************Exportar modulo********************/
export {
    create_service
}