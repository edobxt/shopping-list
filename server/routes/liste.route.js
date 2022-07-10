/**
 * KANCEL Jonathan - L3 MIAGE
 * Liste des routes et des fonctions qu'elles appellent
 */

import express from "express";
import {
    getProduitsByPseudo,
    createProduitByPseudo,
    deleteProduitById,
    cocherProduitById,
    decocherProduitById,
    getListes
} from "../controllers/liste.controller.js";

const listeRoutes = express.Router();

listeRoutes.route("")
    .get(getListes)

listeRoutes.route("/:pseudo/voir")
    .get(getProduitsByPseudo);

listeRoutes.route("/:pseudo/produit")
    .post(createProduitByPseudo);

listeRoutes.route("/:pseudo/produit/:id")
    .delete(deleteProduitById);

listeRoutes.route("/:pseudo/produit/:id/cocher")
    .put(cocherProduitById);

listeRoutes.route("/:pseudo/produit/:id/decocher")
    .put(decocherProduitById);

export default listeRoutes;