# Introduction



<aside>
    <strong>Base URL</strong>: <code>http://localhost:8000</code>
</aside>

# Installation du projet SpaceTourism

Ce projet contient une partie **Backend** (API Laravel) et une partie **Frontend** (React).  
L’API est disponible localement à l’adresse :  
http://127.0.0.1:8000



## Prérequis

- PHP 8.4.4  
- Composer 2.8.6  
- Node.js 20.18.0  
- (Optionnel) Visual Studio Code  



## 1. Installation du **Backend**

1. `cd SpaceTourism_React/Backend`  
2. `cp .env.example .env`  
3. `composer install`  
4. `php artisan key:generate`  
5. `php artisan storage:link`  
6. `php artisan migrate:fresh --seed`  



## 2. Installation du **Frontend**

1. `npm install`  
2. `npm run dev`  



## 3. Lancement de l’application

1. Dans un nouveau terminal :  
   `cd SpaceTourism_React/Backend`  
2. `php artisan serve`  
3. Ouvrez votre navigateur à l’adresse :  
   http://127.0.0.1:8000  



## Compte par défaut

- **Login** : `admin@admin.test`  
- **Password** : `password`

