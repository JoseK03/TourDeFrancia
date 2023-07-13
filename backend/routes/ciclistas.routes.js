import express from "express";
const router = express.Router();

import { obtenerCiclistas , addCiclistas , deleteCiclista , updateCiclista } from "../controllers/ciclistas.controllers.js";

router.get("/all", obtenerCiclistas);
router.post("/add", addCiclistas);
router.delete("/del/:id", deleteCiclista);
router.patch("/upd/:id", updateCiclista);

export default router;

