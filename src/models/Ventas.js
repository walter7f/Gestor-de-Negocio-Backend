import { DataTypes } from "sequelize";
import db from "../db/index.js";
import User from "./User.js";
import Clientes from "./Clientes.js";

const Ventas= db.get().define(
    "Ventas" ,
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
Ventas.belongsTo(User,{foreignKey:"id_user"});
Ventas.belongsTo(Clientes,{foreignKey:"id_cliente"});
export default Ventas;