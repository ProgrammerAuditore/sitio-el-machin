import * as dotenv from 'dotenv';
dotenv.config();

// Proyecto
const PORT = process.env.PORT || 3000;

// Base de datos (Mysql)
const MYSQLHOST = process.env.MYSQLHOST || "localhost";
const MYSQLUSER = process.env.MYSQLUSER || "root";
const MYSQLPASSWORD = process.env.MYSQLPASSWORD || "";
const MYSQLDATABASE = process.env.MYSQLDATABASE || "dbboutique";
const MYSQLPORT = process.env.MYSQLPORT || 3606;

export const APP = {
    MYSQLHOST,
    MYSQLUSER,
    MYSQLPASSWORD,
    MYSQLDATABASE,
    MYSQLPORT,
    PORT
}