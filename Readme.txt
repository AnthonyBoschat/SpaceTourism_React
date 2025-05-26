Ce projet contient une partie frontend et une partie backend, voici détailler l'installation de la partie backend et la partie frontend.






-----------------------------------------------------------
Backend
-----------------------------------------------------------

Nécessite d'avoir php, node et composer d'installer, voici les versions utiliser pour ce projet : 

php 		-> 8.4.4
composer 	-> 2.8.6
node		-> 20.18.0

0 (optionnel mais jolie). Pour avoir un jolie vs code tout bleu -> dans vscode -> fichier -> ouvrir le dossier -> ouvrir le dossier cloner

1. Naviguer dans le dossier Backend depuis le terminal : " cd .\SpaceTourism_React\Backend\ " ou " cd .\Backend\ " si déjà dans le dossier SpaceTourism_React
2. Créer un nouveau fichier .env qui contient les informations de .env.example au même niveau que .env.example
3. Dans le fichier .env à la ligne 5  "APP_URL" -> indiquer  " http://localhost:8000 "
4. Installer les dépendance PHP ( attendre la fin de l'installation ), dans le terminal : " composer install  "
5. Générer la clé d'application, dans le terminal : " php artisan key:generate "
6. Vérifier que dans le fichier .env, à la ligne 3 (APP_KEY) -> il doit posséder une valeur.
7. Créer le symlink -> " php artisan storage:link "
7. Applications les migrations et seeder la base de donnée -> " php artisan migrate:fresh --seed "

8. Installer les dépendance node : " npm install "
9. Démarrer une première fois via npm pour compiler les assets front : " npm run dev "
10. Ouvrir un nouveau terminal, sur windows : " ctrl + shift + ù "
11. Se rendre encore une fois dans le projet Backend ( voir étape 1 )
12. Lancer le serveur : " php artisan serve "

Le serveur est disponible à cet url : " http://127.0.0.1:8000 "

Pour s'y connecter il est possible de créer un compte.
ou sinon, par défaut un compte existe déjà (Je sais que c'est archi pas sécurisé de mettre ça dans le readme, mais ça reste ud local donc osef) :

Login       : admin@admin.test
Password    : password





-----------------------------------------------------------
Frontend
-----------------------------------------------------------


Il est tard, flemme X 1000 d'expliquer, ça attendra les semaines react, 
mais npm install -> npm run dev -> Et probablement changer dans le fichier endpoint.js l'url du backend pour pointer vers le localhost:8000 ( il est commenter )
