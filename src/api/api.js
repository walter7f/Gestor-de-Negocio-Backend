import express from "express";
import cors from "cors"
import userRouter from "../routes/user.router.js";

import cookieParser from "cookie-parser";
import ventasRouter from "../routes/ventas.rauter.js";
import proveedoresRouter from "../routes/proveedores.router.js";
import productoRouter from "../routes/producto.router.js";
import comprasRouter from "../routes/compras.router.js";
import clientesRouter from "../routes/clientes.router.js";

const app =express();

app.use(cors());
app.use(cookieParser());
//usando los miderwers
app.use(express.json());

//parsear x-www-form-urlencoded
app.use(express.urlencoded({extended:false}));

app.use("/api/admin", userRouter,ventasRouter, proveedoresRouter,productoRouter,comprasRouter,clientesRouter);

export default app;

//logers morgan
