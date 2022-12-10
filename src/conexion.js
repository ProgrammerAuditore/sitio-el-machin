import { createPool } from "mysql2/promise";
import  { APP as configApp }  from './config.js';

export const pool = createPool({
    host: configApp.MYSQLHOST,
    user: configApp.MYSQLUSER,
    password: configApp.MYSQLPASSWORD,
    database: configApp.MYSQLDATABASE,
    port: configApp.MYSQLPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized : false
    }
});
