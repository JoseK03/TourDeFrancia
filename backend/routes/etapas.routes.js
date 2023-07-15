import Router from "express";
import {getEtapa , addEtapa , delEtapa , updEtapa} from "../controllers/etapas.controllers.js"

const router = Router();


router.get("/all", getEtapa);
router.post("/add", addEtapa);
router.delete("/del", delEtapa);
router.patch("/upd", updEtapa);

export default router;