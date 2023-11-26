import { Router } from "express";

import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployeeByIde,
  updateEmployee,
} from "../controllers/employee.controllers.js";


const router = Router();

router.get("/employee", getEmployee);

router.post("/employee", createEmployee);

router.get("/employee/:id", getEmployeeByIde);

router.put("/employee/:id",  updateEmployee);

router.delete("/employee/:id", deleteEmployee);

export default router;