import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";

const app = express();
dotenv.config();
app.use(express.json());


const PORT = process.env.PORT;
conectarDB();
app.listen(PORT,()=>{
    console.log(`si sirve el puerto ${PORT}`);
})