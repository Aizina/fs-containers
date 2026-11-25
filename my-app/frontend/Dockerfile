
FROM node:22 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY client ./client
COPY config ./config
COPY index.html ./
COPY babel.config.js ./
COPY webpack.config.js ./
COPY frontend/nginx.conf /tmp/frontend-nginx.conf

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

FROM nginx:1.29-alpine

COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html/
COPY --from=build /tmp/frontend-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
