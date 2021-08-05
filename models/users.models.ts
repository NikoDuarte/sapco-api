/********************Importacion del CORE*********************/
// |-> Schema y model
import { Schema, model } from 'mongoose'
/********************Descripcion del schema*******************/
// |-> schema users
const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    available: {
        type: String,
        required: true
    }
})
/*********************Exportacion del schema********************/
export default model('User', UserSchema)