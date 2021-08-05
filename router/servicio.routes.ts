/**********************Importacion del CORE********************/
// |-> Router express
import { Router } from 'express'
/********************Importacion de complementos***************/
// |-> Controlador para las rutas
import { create_service } from '../controller/servicio.controller'
// |-> Middlewares
import { validar_jwt } from '../middlewares/validar-jwt.middleware'
/**************Inicializacion del enrutador express************/
const router_servicio = Router()
/**********************Definicion de rutas*********************/
// |-> GET
/**
 * 
 */
// |-> POST
router_servicio.post('/', validar_jwt, create_service)
// |-> PUT
/**
 * 
 */
// |-> DELETE
/**
 * 
 */
/**********************Exportar modulo de rutas*****************/
export default router_servicio