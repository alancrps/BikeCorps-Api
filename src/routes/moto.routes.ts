import { Router } from "express";
import { createMoto, getMotos, updateMoto, deleteMoto, getMoto } from "../controllers/moto.controller";

const router = Router();

router.get("/motos", getMotos);

router.get("/motos/:id", getMoto);

router.post("/motos", createMoto);

router.put("/motos/:id", updateMoto);

router.delete("/motos/:id", deleteMoto);

export default router;