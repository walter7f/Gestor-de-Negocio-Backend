import Clientes from "../models/Clientes.js";

export async function createCliente(request, response){
    try {
        const {nombre,apellido,telefono, direccion,id_user}= request.body;

        const newCliente  = await Clientes.build({nombre,apellido, direccion,telefono,id_user}).save();
        
        response.send(newCliente);
    } catch (error) {
        response.status(500).send({
            message: "Error al crear Cliente  ",
            error,
        });
        
    }
};

export async function getAllCliente(request, response){
    try {
        const cliente = await Clientes.findAll();
        response.send(cliente);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while gettinf all product:  "+ error,
            error,
        });
    }
}
export async function UpdateCliente(request, response){


    try {
        const id = request.params.id;
        const updateCliente = await Clientes.update({
            nombre:request.body.nombre,
            apellido:request.body.apellido,
            telefono:request.body.telefono,
            direccion:request.body.direccion,

        },{
            where:{
                id:id
            }})

        
        response.send(updateCliente);
    } catch (error) {
        response.status(500).send({
            message: "Error al actualizar producto  : "+ error,
            error,
        });
    }
}
export async function deleteOneCliente(request, response){
    const id = request.params.id;

    try {
        const deleteCliente = await Clientes.destroy({where:{ id }});
        if(deleteCliente=== 1){
            return response.send({message:"cliente deleted"});
        }
        response.send({message:"cliente wan not removed"});
    } catch (error) {
        response.status(500).send({
            message: `error al eliminar cliente :${id} ` + error,
            error,
        });
    }
}

export async function getAllClientes(request, response){
    const id = request.params.id;

    try { 
        const cliente = await Clientes.findAll({where:{ id_user:id }});
        if(!cliente){
            return response.status(404).send({messge: "cliente not found"});
        }
        response.send(cliente);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting proveedor  : "+ error,
            error,
        });
    }
}
export async function getOneCliente(request, response){
    const id = request.params.id;

    try { 
        const cliente = await Clientes.findOne({where:{ id }});
        if(!cliente){
            return response.status(404).send({messge: "cliente not found"});
        }
        response.send(cliente);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting proveedor  : "+ error,
            error,
        });
    }
}