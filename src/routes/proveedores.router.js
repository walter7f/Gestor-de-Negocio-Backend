import express from "express";
import { createProveedor,
     deleteOneProveedor, 
     getAllProveedorUser } from "../controllers/proveedores.controller.js";



const proveedoresRouter= express.Router();

proveedoresRouter.post("/proveedor", createProveedor);
proveedoresRouter.get("/proveedor1/:id", getAllProveedorUser);
proveedoresRouter.delete("/proveedor/:id", deleteOneProveedor);



export default proveedoresRouter;
