
FROM node:24 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=http://localhost:8080/api

RUN npm test

RUN npm run build

FROM nginx:1.29-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
