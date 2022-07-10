/**
 * KANCEL Jonathan - L3 MIAGE
 * Configuration de la base de données
 */

import mysql from "mysql";

const bdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "course"
});

export default bdd;