import express from 'express'
<<<<<<< HEAD
=======
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from "cookie-parser";

import inventaryRoutes from "./routes/inventary.router.js";
import employeeRoutes from "./routes/employee.router.js";
import eventRoutes from "./routes/event.router.js";
>>>>>>> angel

const app = express();

app.use(express.json())
<<<<<<< HEAD
=======
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());

app.use("/api", inventaryRoutes);
app.use("/api", employeeRoutes);
app.use("/api", eventRoutes);
>>>>>>> angel

app.get('/',(req,res)=>{
    res.send("This is a test");
});

export default app;