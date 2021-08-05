 # Documentacion API sapco 🧑🏻‍💻
## Descripcion 📃:
_API REST que proporciona diferentes servicios a partir de nesecidades resultas por Twnel._

## Inicializar API 🤯:
Esta API REST esta basada en TypeScript para el tipado estricto y paquetes npm para el proyecto node.

 * Al clonar o descargar el proyecto:
    * npm install o npm i

 * Para iniciar la carpeta de distribucion o despliegue del proyecto:
    * tsc -w

 * Para iniciar el servidor de express:
    * modo de desarrollo: npm run start:dev
    * modo de produccion: npm start

## Estructura de carpetas 📂:
_Una estructura de carpetas simple y entendible para un entorno backend en una API REST_
```
    |_Archivos principales
    |__Controller
        |__Archivos de controladores
    |__Database
        |__Archivo de configuracion DB
    |__Environment
        |__Archivo para el control de las variables de entorno
    |__Helpers
        |__Archivos para ayudas (helper)
    |__Interfaces
        |__Archivos de posibles interfaces de carga o posteo
    |__Middlewares
        |__Archivos para diferrentes validadores (middleware)
    |__Models
        |__Archivos para Schemas de mongo
    |__Router
        |__Archivos de las diferentes rutas para el control de los endpoints
```
## Configuracion de rutas 📡:
Todas las rutas estan definidas segun el schema a utilizar despues del |/api|.

* URL desarrollo: 
   ```http://localhost/api```

* Rutas actuales:
    * Users: ```URL desarrollo/users```
    * Servicio: ```URL desarrollo/servicio```
    * Auth: ```URL desarrollo/auth```
* Algunas rutas actuales llevan variantes:
    * Estado del usuario: ```Users/status{var: boolean}```
## Recomendaciones 👀:
* Leer la documentacion interna de cada archivo para entender el proceso de la API
* Revisar siempre las respuestas del servidor
* Revisar las dependencias del package.json
* Revisar las configuraciones del tsconfig.json
---
Nicolas Duarte 🎉
