const mongoose = require('mongoose')

// Estructura de datos de clientes
const registerSchema = new mongoose.Schema({
    codOperario:{
        type        : String, 
        trim        : true,
        required    : [true, 'El campo descripcion es obligatorio']
    },
    descripcion:{
        type        : String, 
        required    : [true,'El campo descripcion es obligatorio'],
        trim        : true
    },
    fecha:{
        type    : Date
    },
    fechaRegistro:{
        type    : Date
    },
    hora:{
        type    : Date
    },
    lote:{
        type        : Number, 
        required    : [true,'El campo lote es obligatorio'],
    },
    material:{
        type        : String,
        required    : [true,'El campo material operario es obligatorio']
    },
    nombreOperario:{
        type        : String,
        required    : [true,'El campo nombre operario es obligatorio'],

    },
    nroFabricacion:{
        type        : Number, 
        required    : [true,'El campo nroFabricacion es obligatorio'],
    },
    peso:{
        type    : Number,
        min     : [1,'El peso debe ser mayor a 1'],
    },
    turno:{
        type    : String,
    },
    unidad:{
        type    : String,
    }
},
{
    //Con estos campos permitimos que se pueda acceder a los datos de la estructura de datos
    // y que se pueda agregar campos nuevos cuando se hace una consulta
    toJSON  : { virtuals: true},
    toObject: { virtuals: true }
}
)


const Registro = mongoose.model('Registro',registerSchema)


module.exports = Registro