# Puissance 4

Un jeu classique de Puissance 4 (Connect Four) développé en JavaScript vanilla.

## Description

Ce projet est une implémentation web du célèbre jeu Puissance 4, où deux joueurs s'affrontent en plaçant tour à tour des jetons colorés dans une grille verticale. Le premier joueur à aligner 4 jetons de sa couleur (horizontalement, verticalement ou en diagonale) remporte la partie.

## Fonctionnalités

- Jeu à 2 joueurs en local
- Plateau de jeu configurable (lignes et colonnes ajustables)
- Taille par défaut : 6 lignes x 7 colonnes
- Système de score persistant pendant la session
- Physique réaliste (les jetons tombent en bas de la colonne)
- Détection automatique de victoire (4 directions)
- Interface simple et intuitive

## Technologies utilisées

- **HTML5** - Structure de la page
- **CSS3** - Mise en forme et design
- **JavaScript (Vanilla)** - Logique du jeu
- **Docker + Nginx** - Déploiement

## Installation et lancement

### Option 1 : Avec Docker (Recommandé)

```bash
# Cloner le repository
git clone <url-du-repo>
cd Puissance_4

# Construire l'image Docker
docker build -t puissance4 .

# Lancer le conteneur
docker run -d -p 8080:80 --name puissance4-game puissance4
```

Puis ouvrir http://localhost:8080 dans votre navigateur.

### Option 2 : Avec Docker Compose

```bash
# Lancer avec docker-compose
docker-compose up -d
```

Puis ouvrir http://localhost:8080 dans votre navigateur.

### Option 3 : Serveur local Python

```bash
# Avec Python 3
cd Puissance_4
python -m http.server 8000
```

Puis ouvrir http://localhost:8000 dans votre navigateur.

### Option 4 : Directement dans le navigateur

Ouvrir simplement le fichier `index.html` dans votre navigateur web.

## Comment jouer

1. Cliquez sur "Start game" sur la page d'accueil
2. Ajustez la taille du plateau si désiré (boutons +/-)
3. **Joueur 1 (Rouge)** clique sur une colonne pour placer son jeton
4. **Joueur 2 (Jaune)** joue ensuite
5. Le premier à aligner 4 jetons gagne !
6. Cliquez sur "New Game" pour rejouer

## Structure du projet

```
Puissance_4/
├── index.html          # Page d'accueil
├── puissance4.html     # Page du jeu
├── puissance4.css      # Styles
├── puissance4.js       # Logique du jeu
├── Dockerfile          # Configuration Docker
├── docker-compose.yml  # Configuration Docker Compose
└── README.md           # Documentation
```

## Commandes Docker utiles

```bash
# Arrêter le conteneur
docker stop puissance4-game

# Redémarrer le conteneur
docker start puissance4-game

# Supprimer le conteneur
docker rm puissance4-game

# Supprimer l'image
docker rmi puissance4

# Voir les logs
docker logs puissance4-game
```

## Améliorations possibles

- Mode joueur contre IA
- Personnalisation des couleurs des joueurs
- Support jusqu'à 4 joueurs
- Système de pseudonymes
- Sauvegarde des scores entre sessions
- Animations lors de la pose des jetons
- Mode en ligne (multijoueur réseau)

## Licence

Ce projet est libre d'utilisation à des fins éducatives.

## Auteur

Projet réalisé dans le cadre de la validation du module JavaScript.
