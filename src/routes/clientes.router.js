import express from "express"
import { UpdateCliente, createCliente,
     deleteOneCliente, 
     getAllClientes, 
     getOneCliente} from "../controllers/cliente.controller.js";

const clientesRouter= express.Router();

clientesRouter.post("/clientes", createCliente);
clientesRouter.get("/cliente2/:id",getOneCliente);
clientesRouter.get("/cliente/:id",getAllClientes);
clientesRouter.delete("/cliente/:id", deleteOneCliente);
clientesRouter.patch("/cliente/:id", UpdateCliente);
export default clientesRouter;