
FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider

EXPOSE 8002

CMD ["./node_modules/.bin/webpack-dev-server", "--config", "frontend/webpack.dev.js", "--mode", "development"]
