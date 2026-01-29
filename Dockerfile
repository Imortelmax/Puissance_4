# Utilisation de Nginx Alpine pour un conteneur léger
FROM nginx:alpine

# Métadonnées de l'image
LABEL maintainer="Puissance 4 Game"
LABEL description="Jeu Puissance 4 en JavaScript vanilla"
LABEL version="1.0"

# Copie des fichiers du jeu vers le répertoire Nginx
COPY index.html /usr/share/nginx/html/
COPY puissance4.html /usr/share/nginx/html/
COPY puissance4.css /usr/share/nginx/html/
COPY puissance4.js /usr/share/nginx/html/

# Configuration Nginx personnalisée pour une meilleure sécurité
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    location / { \
        try_files $uri $uri/ =404; \
    } \
    \
    # Sécurité: désactiver l'\''affichage de la version Nginx \
    server_tokens off; \
    \
    # Headers de sécurité \
    add_header X-Frame-Options "SAMEORIGIN" always; \
    add_header X-Content-Type-Options "nosniff" always; \
}' > /etc/nginx/conf.d/default.conf

# Exposition du port 80
EXPOSE 80

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]