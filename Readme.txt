Ce projet contient une partie frontend et une partie backend, voici détailler l'installation de la partie backend et la partie frontend.






-----------------------------------------------------------
Backend
-----------------------------------------------------------

Nécessite d'avoir php, node et composer d'installer, voici les versions utiliser pour ce projet : 

php 		-> 8.4.4
composer 	-> 2.8.6
node		-> 20.18.0

1. Naviguer dans le dossier Backend depuis le terminal : " cd .\SpaceTourism_React\Backend\ "
2. Créer un nouveau fichier .env qui contient les informations de .env.example au même niveau que .env.example

. Installer les dépendance PHP ( attendre la fin de l'installation ), dans le terminal : " composer install --optimize-autoloader --no-dev "
. Générer la clé d'application, dans le terminal : " php artisan key:generate "
. Vérifier que dans le fichier .env, à la ligne 3 (APP_KEY) -> il doit posséder une valeur.

. Applications les migrations et seeder la base de donnée -> " php artisan migrate --seed "

. Installer les dépendance node : " npm install "
. Démarrer une première fois via npm pour compiler les assets front : " npm run dev "
. Ouvrir un nouveau terminal, sur windows : " ctrl + shift + ù "
. Se rendre encore une fois dans le projet Backend ( voir étape 1 )
. Lancer le serveur : " php artisan serve "

