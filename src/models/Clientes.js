import {DataTypes} from "sequelize"
import db from "../db/index.js";
import User from "./User.js";


const Clientes = db.get().define(
    "Clientes",
     {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        telefono:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);
Clientes.belongsTo(User, {foreignKey: "id_user"});


export default Clientes;


// orm  BD relacional
// odm   BD no relacional