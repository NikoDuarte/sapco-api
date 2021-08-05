/**********************Importacion del CORE******************/
// |-> Dotenv
import dotenv from 'dotenv'
/************Configuracion de varialbes de entorno***********/
dotenv.config()
/********************Variables estaticas*********************/
const USER_MONGO: string = String(process.env.USER_MONGO)
const PASS_MONGO: string = String(process.env.PASS_MONGO)
/********************Variables de exportacion****************/
const PORT = process.env.PORT
const URL_CONNECT = `mongodb+srv://${USER_MONGO}:${PASS_MONGO}@sapco-dbms.0cnzo.mongodb.net/sapco`
const JWT = process.env.JWT_SECRET // |-> Encriptacion en md5
const TWNEL_MSG = process.env.URL_TWNEL_MSG
const JWT_TWNEL = process.env.TWNEL_MSG
/********************Modulo de exportacion*******************/
export {
    PORT,
    URL_CONNECT,
    JWT,
    TWNEL_MSG,
    JWT_TWNEL
}