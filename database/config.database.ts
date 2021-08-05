/****************Importaciones CORE***************/
// |-> Mongoose
import mongoose from 'mongoose'
// |-> Url de coneccion con mongo .env
import { URL_CONNECT } from '../environment/environment.prod'
/**************Conexion a la base de datos****************/
export const connectDbms = async() => {
    try {
        
        await mongoose.connect(URL_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('Success, dbms online!');
        

    } catch (err) {
        console.log(URL_CONNECT);
        
        console.log(err);
        throw new Error("Error when staring dbms");
        
    }
}
