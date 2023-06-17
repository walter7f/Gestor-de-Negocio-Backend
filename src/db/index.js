import { Sequelize } from "sequelize";

import { config as configureEnvVars} from "dotenv"


class DB {
    sequelize;

    constructor(){
        configureEnvVars();
        this.sequelize = new Sequelize({
            dialect: "mssql",
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,  
          //  port: process.env.SERVER_PORT,

            
            
            
        }); 
    }   

    async connect() { 
        try {

            await this.sequelize.authenticate();
            await this.sequelize.sync();

            console.log('DB IS RUNNING');
        } catch (error) {
            console.error('ERROR IN DB CONNECTION' + error);
        }
    }

    get() {
        return this.sequelize; 
    }
}


const db = new DB();

export default db;

/*
sys/ as sysdba
show pdbs;
 alter pluggable database POLLOS_HERMANOS open;
 */