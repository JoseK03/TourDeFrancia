import Ciclista from "../models/Ciclistas.js";

const obtenerCiclistas = async (req,res) =>{
    const ciclista = Ciclista.find();
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
        
    }
}

export {obtenerCiclistas , addCiclistas , deleteCiclista , updateCiclista};