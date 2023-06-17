import Productos from "../models/Productos.js";



export async function createProducto(request, response){
    try {
        const {categoria, nombreProducto,presioUnitario,marca,cantidad,id_user,id_proveedores}= request.body;
        const newProducto  = await Productos.build({categoria, nombreProducto,presioUnitario,marca,cantidad,id_user,id_proveedores}).save();

        response.send(newProducto);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while creating a new Producto "+ error,
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
export async function getOneProducto(request, response){
    const id = request.params.id;

    try {
        const prod = await Productos.findOne({where:{ id }});
        if(!prod){
            return response.status(404).send({messge: "product not found"});
        }
        response.send(prod);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting product  : "+ error,
            error,
        });
    }
}

export async function deleteOneProducto(request, response){
    const id = request.params.id;

    try {
        const deleteProd = await Productos.destroy({where:{ id}});
        
        if(deleteProd === 1){
            return response.send({message:"Product deleted"});
        }
        response.send({message:"Product wan not removed"});
    } catch (error) {
        response.status(500).send({
            message: `There war an error while deleting  product:${id} ` + error,
            error,
        });
    }
}

export async function getAllProduct(request, response){
    const id = request.params.id;

    try { 
        const prod = await Productos.findAll({where:{ id_user:id }});
        if(!prod){
            return response.status(404).send({messge: "product not found"});
        }
        response.send(prod);
    } catch (error) {
        response.status(500).send({
            message: "There war an error while getting product  : "+ error,
            error,
        });
    }
}

export async function UpdateProducto(request, response){


    try {
        const id = request.params.id;
    
        const updateProduccto = await Productos.update({
            categoria:request.body.categoria, 
            nombreProducto:request.body.nombreProducto,
            presioUnitario:request.body.presioUnitario,
            marca:request.body.marca,
            cantidad:request.body.cantidad
        },{
            where:{
                id:id
            }})

        
        response.send(updateProduccto);
    } catch (error) {
        response.status(500).send({
            message: "Error al actualizar producto  : "+ error,
            error,
        });
    }
}

/*

export async function buscarCuenta ( request, response){
    try {
        const{name_bank, account_number}= request.body
        const accountFound=  await Account.findOne({where:{name_bank, account_number}})
        if(!accountFound){
            return response
            .status(404)
            .send({message: "Cuenta no encontrada"});
           };
        const idResult= await accountFound.getDataValue('id')
        const moneda= await accountFound.getDataValue('currency')
        const saldo = await accountFound.getDataValue('balance')
        response.send({idResult, moneda, saldo})
    } catch (error) {
        
    }
}*/