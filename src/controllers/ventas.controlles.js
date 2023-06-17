/*import Account from "../models/Account.js";
import Income from "../models/Income.js"*/
import Clientes from "../models/Clientes.js";
import Ventas from "../models/Ventas.js"


export async function createVenta(request, response){
    try {
        const {categoria,producto, presioUnitario,marca,cantidad,id_user,id_cliente}= request.body;

        const newVenta  = await Ventas.build({categoria,producto, presioUnitario,marca,cantidad,id_user,id_cliente}).save();
        
        response.send(newVenta);
    } catch (error) {
        response.status(500).send({
            message: "Error al crear Venta  "+ error,
            error,
        });
        
    }
};

/*export async function getAllIncome(request, response){
    try {
        const incomes = await Income.findAll();
        response.send(incomes);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while gettinf all product:  "+ error,
            error,
        });
    }
}*/

export async function getOneVentas(request, response){
    const id = request.params.id;

    try {
        const ventas = await Ventas.findOne({where:{ id }});
        if(!ventas){
            return response.status(404).send({messge: "venta no encotrada"});
        }
        response.send(ventas);
    } catch (error) {
        response.status(500).send({
            message: "Error al buscar venta  : "+ error,
            error,
        });
    }
}

export async function deleteOneVentas(request, response){
    const id = request.params.id;

    try {
        const deleteVentas = await Ventas.destroy({where:{ id }});
        if(deleteVentas === 1){
            return response.send({message:"Venta eliminada"});
        }
        response.send({message:"No se pudeo elimiar venta "});
    } catch (error) {
        response.status(500).send({
            message: `Error al eliminar venta :${id} ` + error,
            error,
        });
    }
}

export async function ventasUsuario(request, response){
    const id = request.params.id;

    try { 
        const venta = await Ventas.findAll({where:{ id_user:id }});
        if(!venta){
            return response.status(404).send({messge: "venta no encontrada"});
        }
        response.send(venta);
    } catch (error) {
        response.status(500).send({
            message: "Error al buscar ventas   : "+ error,
            error,
        });
    }
}

export async function vetasUsuarioCompleta(request, response){
    const id = request.params.id;

    try { 
        const venta= await Ventas.findAll({where:{ id_cliente:id },
        include:[{model:Clientes}]
        });
        if(!venta){
            return response.status(404).send({messge: "venta not found "});
        }
        response.send(venta);
    } catch (error) {
        response.status(500).send({
            message: "Error al buscar venta  : "+ error,
            error,
        });
    }
}