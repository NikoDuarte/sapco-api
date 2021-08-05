/*****************Importacion del CORE*****************/
// |-> JWT (jsonwebtoken)
import jwt from 'jsonwebtoken'
/*****************Variables de entorno****************/
import { JWT } from '../environment/environment.prod'
/******************Funciones helpers******************/
// |-> Generara un JWT
const generatorJWT = (phone: string) => {
    // |-> Retornara una promesa
    return new Promise((resolve, reject) => {
        // |-> Tipamos el payload del JWT
        const payload = {
            phone
        }
        // |-> Generamos el JWT
         jwt.sign( payload, String(JWT), {
            // |-> Duracion del token (5 horas)
            expiresIn: '5h'
        }, // |-> Retornara el token o un error
        (err, token) => {
            // |-> Si existe un error
            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT')
            }else resolve(token) // |-> De lo contrario devolvera el token
        } )
    })
}
/******************Modulo de exportacion**************/
export {
    generatorJWT
}
