/**********************Importacion del CORE********************/
// |-> Router express
import { Router } from 'express'
/********************Importacion de complementos***************/
// |-> Controlador para las rutas
import { sign_in } from '../controller/auth.controller'
// |-> Middlewares
/**
 * 
 */
/**************Inicializacion del enrutador express************/
const router_auth = Router()
/**********************Definicion de rutas*********************/
// |-> POST
router_auth.post('/', sign_in)
/**********************Exportar modulo de rutas*****************/
export default router_auth