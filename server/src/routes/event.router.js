import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEventByIde,
  updateEvent
} from "../controllers/event.controllers.js";


const router = Router();

router.get("/event", getEvent);

router.post("/event", createEvent);

router.get("/event/:id", getEventByIde);

router.put("/event/:id",  updateEvent);

router.delete("/event/:id", deleteEvent);

export default router;