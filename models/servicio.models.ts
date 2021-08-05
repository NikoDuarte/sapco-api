/********************Importacion del CORE*********************/
// |-> Schema y model
import { Schema, model } from 'mongoose'
/********************Descripcion del schema*******************/
const ServicioSchema: Schema = new Schema({
    uuid: {
        type: String,
        required: true
    },
    cityCode: {
        type: String,
        required: true
    },
    latitudeOrigin: {
        type: String,
        required: true
    },
    longitudeOrigin: {
        type: String,
        required: true
    },
    pointReferenceOrigin: {
        type: String,
        required: true
    },
    addresOrigin: {
        type: String,
        required: true
    },
    latitudeDestination: {
        type: String,
        required: true
    },
    longitudeDestination: {
        type: String,
        required: true
    },
    pointReferenceDestination: {
        type: String,
        required: true
    },
    addresDestination: {
        type: String,
        required: true
    },
    serviceType: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: String,
        required: true
    },
    appointmentHour: {
        type: String,
        required: true
    },
    observations: {
        type: String,
        required: true
    },
    guardian: {
        type: String,
        required: true
    }
})

export default model('Servicio', ServicioSchema)