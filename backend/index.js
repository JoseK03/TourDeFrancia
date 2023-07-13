import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import routerCiclistas from "./routes/ciclistas.routes.js";
import routerGrupos from "./routes/grupos.routes.js";

const app = express();
dotenv.config();
app.use(express.json());


const PORT = process.env.PORT;
conectarDB();

app.use("/ciclistas",routerCiclistas);
app.use("/equipos",routerGrupos);   


app.listen(PORT,()=>{
    console.log(`si sirve el puerto ${PORT}`);
})