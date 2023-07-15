import Premios from "../models/Premios.js";

const getPremios = async (req,res) => {
    const obtener = await Premios.find();
    res.json(obtener);
}

const postPremios = async(req,res) => {
    const nuevoPremio = new Premios(req.body);
    try {
        const nuevo = nuevoPremio.save();
        res.json(nuevo);
    } catch (error) {
        console.log(error);
    }
}

const deletePremios =async (req,res) =>{
    try {
        await Premios.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        
    }
}

const updatePremios = async(req,res) =>{
    try {
        const editar = Premios.findOne({_id:req.params.id});
        if(req.body.premio){
            editar.premio = req.body.premio
        }
        if(req.body.valor){
            editar.valor = req.body.premio
        }
        await editar.save();
        res.json(editar);
    } catch (error) {
        console.log(error);
    }
}

export {getPremios, postPremios, deletePremios , updatePremios};