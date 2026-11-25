
FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

EXPOSE 8001

CMD ["./node_modules/.bin/nodemon", "--config", "backend/nodemon.json", "backend/dev-server.js"]
