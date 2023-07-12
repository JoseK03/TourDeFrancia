import mongoose from "mongoose";

const CiclistaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    edad:{
        type:String,
        required:true,
        trim:true
    },
    estatura:{
        type:String,
        required:true,
        trim:true,
    }
    },
    {
        timestamps: true
    }
    );
    const Ciclista = mongoose.model("ciclista",CiclistaSchema);
    export default CiclistaSchema;