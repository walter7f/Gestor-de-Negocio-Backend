import {DataTypes} from "sequelize"
import db from "../db/index.js";
import User from "./User.js";
import Proveedores from "./Proveedores.js";


const Productos = db.get().define(
    "Productos",
     {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        categoria:{
            type:DataTypes.STRING,
            allowNull:false,
        }, 
        nombreProducto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        presioUnitario:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        marca:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.FLOAT,
            allowNull: false,
            
        },
    }
);
Productos.belongsTo(User,{foreignKey:"id_user"});
Productos.belongsTo(Proveedores,{foreignKey:"id_proveedores"});


export default Productos;
