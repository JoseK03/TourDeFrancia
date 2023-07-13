import Ciclista from "../models/Ciclistas.js";

const obtenerCiclistas = async (req,res) =>{
    const ciclista = await Ciclista.find();
    res.json(ciclista)
}

const addCiclistas = async (req,res) =>{
    const ciclista = new Ciclista(req.body);
    try {
        const añadirCiclista = await ciclista.save();
        res.json(añadirCiclista);
    } catch (error) {
     console.log(error);
    }
}

const deleteCiclista = async (req,res) => {
    try {
        await Ciclista.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updateCiclista = async (req,res) => {
    try {
        const ciclista = await Ciclista.deleteOne({_id:req.params.id});
        if(req.body.nombre){
            ciclista.nombre = req.body.nombre
        }
        if(req.body.edad){
            ciclista.edad = req.body.edad
        }
        if(req.body.estatura){
            ciclista.estatura = req.body.estatura
        }
        await ciclista.save();
        res.send(ciclista);
    } catch (error) {
        console.log(error);
    }
}

export {obtenerCiclistas , addCiclistas , deleteCiclista , updateCiclista};