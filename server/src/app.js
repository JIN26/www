import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from "cookie-parser";

import inventaryRoutes from "./routes/inventary.router.js";
import employeeRoutes from "./routes/employee.router.js";
import eventRoutes from "./routes/event.router.js";

const app = express();

app.use(express.json())
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

app.use("/api", inventaryRoutes);
app.use("/api", employeeRoutes);
app.use("/api", eventRoutes);

app.get('/',(req,res)=>{
    res.send("This is a test");
});

export default app;
