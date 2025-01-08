Pour que la commande ./start.sh fonctionne

Il faut avoir créer une base de donnée dans postgresql
    1. Se connecter à postgresql : sudo -u postgres psql
    2. Lister les DATABASES pour vérifier l'existence : \l
    3. Créer une base de donnée : CREATE DATABASE ****
    4. Dans heidi, créer une BDD à ce nom.



Pour se connecter à DJango admin, vérifier les utilisateur : 

    1. python3 manage.py shell
    2. Entrer ce code :
        from django.contrib.auth.models import User
        print(User.objects.all())

    2.1. Sortir du shell : quit()

    3. Si aucun utilisateur : python3 manage.py createsuperuser