import { Router } from "express";
import { getTicketsController,healthCheckController } from "../controllers/tickets.controllers.js";

const router = Router()

router.get("/api/v1/health", (req, res) => {
  healthCheckController(req, res)
});

router.get("/api/v1/tickets", (req, res) => {
    getTicketsController(req, res);
});





export default router