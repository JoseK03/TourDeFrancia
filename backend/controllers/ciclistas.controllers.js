import Ciclista from "../models/Ciclistas.js";

const obtenerCiclistas = async  (req,res) =>{
    const ciclista = await Ciclista.find()
    res.json(ciclista);
}

export {obtenerCiclistas};