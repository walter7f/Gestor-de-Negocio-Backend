import Compras from "../models/Compras.js";


export async function createCompars(request, response){
    try {
        const {categoria,producto,presioUnitario,marca,cantidad,id_user,id_proveedores}= request.body;
        const newCompra  = await Compras.build({categoria,producto,presioUnitario,marca,cantidad,id_user,id_proveedores}).save();

        response.send(newCompra);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while creating a new Compra "+ error,
            error,
        });
        
    }
};

/*export async function getAllAccount(request, response){
    try {
        const accounts = await Account.findAll();
        response.send(accounts);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while gettinf all product:  "+ error,
            error,
        });
    }
}
*/
export async function getOneCompra(request, response){
    const id = request.params.id;

    try {
        const comp = await Compras.findOne({where:{ id }});
        if(!comp){
            return response.status(404).send({messge: "compra not found"});
        }
        response.send(comp);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting product  : "+ error,
            error,
        });
    }
}

export async function deleteOneCompras(request, response){
    const id = request.params.id;

    try {
        const deleteComp= await Compras.destroy({where:{ id}});
        
        if(deleteComp === 1){
            return response.send({message:"Compra deleted"});
        }
        response.send({message:"Compras wan not removed"});
    } catch (error) {
        response.status(500).send({
            message: `There war an error while deleting compra :${id} ` + error,
            error,
        });
    }
}

export async function getAllCompras(request, response){
    const id = request.params.id;

    try { 
        const comp = await Compras.findAll({where:{ id_user:id }});
        if(!comp){
            return response.status(404).send({messge: "product not found"});
        }
        response.send(comp);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting product  : "+ error,
            error,
        });
    }
}