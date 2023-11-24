import { Router } from "express";
import {
  createInventory,
  deleteInventory,
  getInventory,
  getInventoryByIde,
  updateInventory,

} from "../controllers/inventaries.controllers.js";


const router = Router();

router.get("/inventary", getInventory);

router.post("/inventary", createInventory);

router.get("/inventary/:id", getInventoryByIde);

router.put("/inventary/:id",  updateInventory);

router.delete("/inventary/:id", deleteInventory);

export default router;