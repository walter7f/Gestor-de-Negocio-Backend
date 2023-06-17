import express from "express";
import { createCompars,
     deleteOneCompras, 
     getAllCompras } from "../controllers/compras.controller.js";


const comprasRouter= express.Router();

comprasRouter.post("/compras", createCompars);
comprasRouter.get("/compras/:id", getAllCompras);
comprasRouter.delete("/compras/:id", deleteOneCompras);


export default comprasRouter;