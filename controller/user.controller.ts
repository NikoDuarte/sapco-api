/*******************Importacion del CORE******************/
// |-> Request y Response de express
import { Request, Response } from "express";
/******************Importacion de interfaces**************/
// |-> _create_users
import { _create_users } from '../interfaces/creates.interfaces'
/*******************Importacion de modelos*********************/
// |-> User
import User from '../models/users.models'
/***************Importacion de helpers****************/
import { generatorJWT } from '../helpers/jwt.helpers'
/*********************Controladores*******************/
// |-> Ver usuario
/**
 * 
 */
// |-> Cambiar estado (available) de un usuario
const changeStatusUsers = async(req: Request | any, res: Response)=> {
    // |-> Captura del telefono por el token suministrado en el header
    const phone: string = req.phone
    const value: boolean = req.params.value
    // |-> Control de errores tryCatch
    try {
        // |-> Busqueda del usuario pro el telefono {phone1}
        const UserFindPhone = await User.find({phone: phone})
        // |-> Validar si existe el telefono o no
        if (!UserFindPhone) {
            // |-> Si no lo encuentra retornara un 404
            return res.status(404).json({
                success: false,
                msg: 'El usuario que intenta procesar la peticion no existe o no es encontrado en el sistema'
            })
        }
        // |-> Extraemos el _id del usuario que hizo la peticion
        const uid = UserFindPhone[0]._id        
        // |-> Cambiaremos el valor available segun la variable entrante en {value}
        const UserChangeStatus = await User.findByIdAndUpdate(uid, {available: value}, {new: true})
        // |-> Validaremos que la se haya actualizado
        if (!UserChangeStatus) {
            // |-> Si no se ejecuto la actualizacion devolveremos un 400
            return res.status(400).json({
                success: false,
                msg: 'No se pudo actualizar el estado del usuario'
            })
        }
        // |-> Si todo sale bien devolveremos una respuesta de exito
        res.status(200).json({
            success: true,
            msg: 'Actualizacion exitosa',
            data: UserChangeStatus
        })
    } catch (err) {
        // |-> Error por consola
        console.log(err);
        // |-> Mensaje de error con status 500
        res.status(500).json({
            success: false,
            msg: 'Ocurrio un problema al procesar esta peticion... revisa los logs'
        })
    }

}
// |-> Crear usuario
const createUsers = async(req: Request, res: Response) => {
    // |-> Extraccion de variables para el registro
    const { phone }: _create_users = req.body
    // |-> Validador de errores tryCatch
    try {
        // |-> Buscar el usuario
        const findUserPhone = await User.findOne({phone: phone})
        // |-> Condicional que respondera si existe el usuario
        if (findUserPhone) {
            return res.status(400).json({
                success: false,
                msg: 'Parece que el usuario existe en nuestro sistema'
            })
        }
        // |-> Si el usuario no existe crearemos uno segun el modelo
        const newUser = await new User( req.body )
        // |-> Guardamos el usuario
        await newUser.save()
        // |-> Generaremos el token de acceso
        const token = await generatorJWT(newUser.phone)
        // |-> Respuesta de exito
        res.status(200).json({
            success: true,
            msg: 'Listo para crear usuarios',
            data: {
                user: newUser,
                token
            },

        })
    } catch (err) {
        // |-> Error por consola
        console.log(err);
        // |-> Respuesta de error con status 500
        return res.status(500).json({
            success: false,
            msg: 'Ocurrio un error en el proceso de esta peticion... Revisar los logs'
        })
    }


}
/*********************Exportar modulo********************/
export {
    changeStatusUsers,
    createUsers
}