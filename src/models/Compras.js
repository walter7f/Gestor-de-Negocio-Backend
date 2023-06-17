import { DataTypes } from "sequelize";
import db from "../db/index.js";
import User from "./User.js";
import Proveedores from "./Proveedores.js";



const Compras= db.get().define(
    "Compras" ,
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        categoria:{
            type: DataTypes.STRING,
            allowNull:false,
        }, 
        producto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        presioUnitario:{
            type: DataTypes.FLOAT,
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
Compras.belongsTo(User,{foreignKey:"id_user"});
Compras.belongsTo(Proveedores,{foreignKey:"id_proveedores"});
export default Compras;