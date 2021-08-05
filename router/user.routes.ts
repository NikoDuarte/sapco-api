/**********************Importacion del CORE********************/
// |-> Router express
import { Router } from 'express'
/********************Importacion de complementos***************/
// |-> Controlador para las rutas
import { createUsers, changeStatusUsers } from '../controller/user.controller'
// |-> Middlewares
import { validar_jwt } from '../middlewares/validar-jwt.middleware'
/**************Inicializacion del enrutador express************/
const router_users = Router()
/**********************Definicion de rutas*********************/
// |-> GET
router_users.get('/status/:value', validar_jwt, changeStatusUsers)
// |-> POST
router_users.post('/', createUsers)
// |-> PUT
/**
 * 
 */
// |-> DELETE
/**
 * 
 */
/**********************Exportar modulo de rutas*****************/
export default router_users