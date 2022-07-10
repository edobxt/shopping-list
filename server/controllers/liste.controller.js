/**
 * KANCEL Jonathan - L3 MIAGE
 * Controlleur effectuant toutes les opérations avec la base de données
 */

import bdd from "../config/mysql.config.js";

export  const getListes = (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const getListes = "select distinct proprietaire from liste";

    bdd.query(getListes, (err, result) => {
        if (err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
}

export const getProduitsByPseudo = (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const getListByPseudo = `select * from liste where proprietaire = '${req.params.pseudo}' order by etat`;

    bdd.query(getListByPseudo, (err, result) => {
        if (err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
}

export const createProduitByPseudo = (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const queryCreateProduitByPseudo = `insert into liste (intitule, nombre, etat, proprietaire)` +
        ` VALUES ('${req.body.intitule}', '${req.body.nombre}', '0', '${req.params.pseudo}')`;

    bdd.query(queryCreateProduitByPseudo, (err, result) => {
        if (err) throw err;

        if (result) {
            res.write(`Le produit a bien été ajouté`)
            res.end();
        }
    })
}

export const deleteProduitById = (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const queryDeleteProduitById = `delete from liste where id_liste = ${req.params.id}`;

    bdd.query(queryDeleteProduitById, (err, result) => {
        if (err) throw err;

        res.write(`Le produit ayant l'id ${req.params.id} a bien été supprimé`);
        res.end();
    })
}

export const cocherProduitById = (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const queryCocherProduitById = `update liste set etat = '1' where id_liste = ${req.params.id}`;

    bdd.query(queryCocherProduitById, (err, result) => {
        if (err) throw err;

        res.write(`Le produit avec l'id ${req.params.id} a bien été coché`);
        res.end();
    })
}

export const decocherProduitById = (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const queryCocherProduitById = `update liste set etat = '0' where id_liste = ${req.params.id}`;

    bdd.query(queryCocherProduitById, (err, result) => {
        if (err) throw err;

        res.write(`Le produit avec l'id ${req.params.id} a bien été décoché`);
        res.end();
    })
}