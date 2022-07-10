/**
 * KANCEL Jonathan - L3 MIAGE
 * Index du serveur
 */

import express from "express";
import cors from "cors";
import listeRoute from "./routes/liste.route.js";
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get( "/", ( req, res ) => {
    res.send( "Bienvenue sur le service de liste de courses de KANCEL Jonathan." );
});

app.use("/liste", listeRoute);

app.listen( port, () => {
    console.log( `Serveur realise par KANCEL Jonathan demarre a http://localhost:${port}` );
});