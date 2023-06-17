import express from "express";
import { createVenta, 
    deleteOneVentas, 
    getOneVentas, 
    ventasUsuario } from "../controllers/ventas.controlles.js";


const ventasRouter = express.Router();

ventasRouter.post("/venta",createVenta);
ventasRouter.get("/venta1/:id", getOneVentas);
ventasRouter.get("/venta2/:id", ventasUsuario);
ventasRouter.delete("/venta/:id",deleteOneVentas);

export default ventasRouter ;
 