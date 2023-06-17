import express from "express";
import {Auth} from '../middleware/auth.middleware.js';
import { UpdateProducto, 
    createProducto, 
    deleteOneProducto, 
    getAllProduct, 
    getOneProducto } from "../controllers/producto.controller.js";

const productoRouter =  express.Router();

productoRouter.post("/prodcuto",createProducto);
productoRouter.get("/producto1/:id", getAllProduct);
productoRouter.get("/producto2/:id", getOneProducto);
productoRouter.delete("/producto/:id",deleteOneProducto);
productoRouter.patch("/producto/:id", UpdateProducto);



export default productoRouter;


