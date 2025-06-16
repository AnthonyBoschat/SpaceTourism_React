
# Documentation – Installation du serveur Laravel

Cette documentation permet d’installer les dépendances nécessaires au bon fonctionnement de la partie **serveur** d’un projet réalisé avec **Laravel**.

----------

## 🔄 Clonage du projet

Cloner le dépôt GitHub :

`git clone https://github.com/AnthonyBoschat/SpaceTourism_React.git` 

----------

## ⚙️ Backend – Installation

L’environnement nécessite d’avoir **PHP**, **Node.js** et **Composer** installés.  
Voici les versions utilisées pour ce projet :

-   **PHP** : 8.4.4
    
-   **Composer** : 2.8.6
    
-   **Node.js** : 20.18.0
    

----------

### 🛠️ Étapes d'installation

1.  Ouvrir un terminal et naviguer dans le dossier `Backend` :
    
    `cd ./SpaceTourism_React/Backend/` 
    
    ou, si déjà dans le dossier principal :
    
    `cd ./Backend/` 
    
2.  Créer un fichier `.env` à partir de `.env.example` :
    
    `cp .env.example .env` 
    
3.  Installer les dépendances PHP :
    
    `composer install` 
    
4.  Générer la clé d’application :
    
    `php artisan key:generate` 
    
5.  Vérifier que la variable `APP_KEY` est bien définie dans le fichier `.env` (ligne 3).
    
6.  Créer le lien symbolique pour les fichiers de stockage :
    
    `php artisan storage:link` 
    
7.  Appliquer les migrations et insérer les données de test :
    
    `php artisan migrate:fresh --seed` 
    
8.  Installer les dépendances Node.js :
    
    `npm install` 
    
9.  Compiler les assets front :
    
    `npm run dev` 
    
10.  Ouvrir un **nouveau terminal** (sur Windows : `Ctrl + Shift + ù`)
    
11.  Se replacer dans le dossier `Backend` (voir étape 1 si besoin)
    
12.  Lancer le serveur Laravel :
    
    `php artisan serve` 
    

----------

## 🌐 Accès à l'application

Le serveur est accessible à l'adresse suivante :  
👉 [http://127.0.0.1:8000](http://127.0.0.1:8000)

Deux options pour se connecter :

-   Créer un nouveau compte via l'interface
    
-   Ou utiliser le compte par défaut _(⚠️ à ne pas utiliser en production)_ :
    
    -   **Email** : `admin@admin.test`
        
    -   **Mot de passe** : `password`
