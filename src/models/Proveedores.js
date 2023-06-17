import {DataTypes} from "sequelize"
import db from "../db/index.js";
import User from "./User.js";



const Proveedores = db.get().define(
    "Proveedores",
     {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        empresa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contacto:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        puesto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    }
);

// esto hace la relacion con las demas tablas 
Proveedores.belongsTo(User, {foreignKey: "id_user"});



export default Proveedores;
