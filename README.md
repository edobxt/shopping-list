# Projet : Service de liste de course NodeJS + MySQL + React
Réalisé par KANCEL Jonathan durant la L3 MIAGE pendant le mois de Juillet 2022.

## Structure du projet

| Packages  | Utilisation                                     |
|-----------|:------------------------------------------------|
| `/server` | Backend du projet sous NodeJS, Express et MySQL |
| `/client` | Frontend du projet sous React et BaseUI         |

## Packages utilisés
| Packages | Utilisation                                                                   |
|----------|:------------------------------------------------------------------------------|
| express  | La meilleure solution pour réaliser un serveur HTTP sous NodeJS               |
| nodemon  | Permet de relancer automatiquement le serveur HTTP au changement d'un fichier |
| mysql    | Permet d'interagir un serveur MySQL                                           |
| cors     | Permet d'activer CORS avec diverses options                                   |
| baseui   | Design system pour React créé par Uber                                        |
| axios    | Permet de réaliser des requêtes HTTP plus simplement                          |

S'il s'agit de votre premier lancement, effectuez la commande `npm i` dans les dossiers `/server` et `/client`,
puis lancez la commande `npm start` qui lancera le serveur backend et l'application frontend simultanément.