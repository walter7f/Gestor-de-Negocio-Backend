import Proveedores from "../models/Proveedores.js";

export async function createProveedor(request, response){
    try {
        const {empresa,contacto,puesto, direccion,telefono,id_user}= request.body;

        const newProveedor  = await Proveedores.build({empresa,contacto,puesto, direccion,telefono,id_user}).save();
        
        response.send(newProveedor);
    } catch (error) {
        response.status(500).send({
            message: "Error al crear proveedor  ",
            error,
        });
        
    }
};

/*export async function getAllProveedores(request, response){
    try {
        const proveedors = await Proveedores.findAll();
        response.send(proveedors);
    } catch (error) {
        response.status(500).send({
            message: "error al bucar proveedores:  "+ error,
            error,
        });
    }
}
*/
export async function getOneProveedor(request, response){
    const id = request.params.id;

    try {
        const proveedor = await Proveedores.findOne({where:{ id }});
        if(!proveedor){
            return response.status(404).send({messge: "proveedor not found"});
        }
        response.send(proveedor);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting proveedor  : "+ error,
            error,
        });
    }
}

export async function deleteOneProveedor(request, response){
    const id = request.params.id;

    try {
        const deleteProveedor = await Proveedores.destroy({where:{ id }});
        if(deleteProveedor=== 1){
            return response.send({message:"Proveedor deleted"});
        }
        response.send({message:"Proveedor wan not removed"});
    } catch (error) {
        response.status(500).send({
            message: `error al eliminar proveedor :${id} ` + error,
            error,
        });
    }
}

export async function getAllProveedorUser(request, response){
    const id = request.params.id;

    try { 
        const proveedor = await Proveedores.findAll({where:{ id_user:id }});
        if(!proveedor){
            return response.status(404).send({messge: "proveedor not found"});
        }
        response.send(proveedor);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting proveedor  : "+ error,
            error,
        });
    }
}
/*export async function getExpenId(request, response){
    const id = request.params.id;

    try { 
        const expenses = await Expenses.findAll({where:{ id_account:id }});
        if(!expenses){
            return response.status(404).send({messge: "product not found"});
        }
        response.send(expenses);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting product  : "+ error,
            error,
        });
    }
}
*/


// actualizar
/*
export async function PagoExpe(request, response){
    const t = await Sequelize.transaction();

    try {*/

      /*  const {name,currency, amount, category,id_user,id_account}= request.body;

        const newExprenses  = await Expenses.build({name,currency,amount,category,id_user,id_account}).save();
        
        response.send(newExprenses);*/
       /* const {name, currency, amount, category, id_user, id_account}= request.body
        const newExprenses = await Expenses.build({name, currency, amount, category, id_user, id_account},{transaction:t}).save();
        const account = Account.update({

                balance: balance - amount,
                where:{id:id_account}
        },{transaction: t })

        await t.commit();
        response.send(newExprenses, account);
    } catch (error) {
        await t.rollback();
        response.status(500).send({
            message: "There war an error while creating a new product: ",
            error,
        });
        
    }
};*/

/*export async function getProveedotComplete(request, response){
    const id = request.params.id;

    try { 
        const proveedor = await Expenses.findAll({where:{ id_user:id },
            include:[{model:Account}]
        });
        if(!expenses){
            return response.status(404).send({messge: "product not found"});
        }
        response.send(expenses);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting product  : "+ error,
            error,
        });
    }
}*/