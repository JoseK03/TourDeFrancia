import { getPremios , postPremios , deletePremios , updatePremios } from "../controllers/premios.controller.js";
import Router from "express";

const router = Router();

router.get("/all", getPremios);
router.post("/add", postPremios);
router.delete("/del" , deletePremios);
router.patch("/upd", updatePremios);

export default router;
