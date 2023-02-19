# utiliser une image Node.js en tant que base
FROM node:lts-alpine
ENV NODE_ENV=production

# définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

# copier les fichiers de l'application dans le répertoir de travail
COPY . .
EXPOSE 3000

# installer les dépendances de l'application
RUN chown -R node /usr/src/app
USER node

# définir une commande par défaut pour exécuter l'application
CMD ["node", "index.js"]
