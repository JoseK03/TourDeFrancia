import mongoose from "mongoose";

const premiosSchema = mongoose.Schema({
    premio:{
        type: String,
        required: true,
        trim: true
    },
    valor:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps: true
    })

    const Premios = mongoose.model("premios", premiosSchema ,"premios");

    export default Premios;