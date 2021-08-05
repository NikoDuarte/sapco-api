/****************Importaciones del core*****************/
// |-> Express
import express from 'express'
// |-> Dotenv
import dotenv from 'dotenv'
// |-> Cors
import cors from 'cors'
// |-> DBMS
import { connectDbms } from './database/config.database';
/***************Configuracion de variables de entorno**************/
dotenv.config()
/*******************Importacion del ambiente*********************/
import { PORT } from './environment/environment.prod'
/********************Importacion de rutas**********************/
// |-> Users Routes
import router_users from './router/user.routes';
// |-> Servicio Routes
import router_servicio from './router/servicio.routes';
// |-> Auth Routes
import router_auth from './router/auth.routes';
/************************Inicializacion de express*********************/
const app = express()
/**********************Configuracion del cors******************/
app.use(cors())
/******************Configuracion de la base de datos*******************/
connectDbms()
/**********************Configuracion del parseo de datos**********************/
app.use(express.urlencoded({extended: true}))
app.use(express.json())
/*************************Implementacion de rutas************************/
// |-> Users
app.use('/api/users', router_users)
// |-> Servicios
app.use('/api/servicio', router_servicio)
// |-> Autenticacion
app.use('/api/auth', router_auth)
/*************************Arranque del servidor*************************/
app.listen( PORT, () => console.log(`Server API online in port: ${PORT}`) )
/***********************Exportar modulo*************************/
export {app}