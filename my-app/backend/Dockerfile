
FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev --legacy-peer-deps

COPY server ./server
COPY config ./config
COPY backend/dev-server.js ./backend/dev-server.js

ENV NODE_ENV=production
ENV PORT=8001

EXPOSE 8001

CMD ["node", "backend/dev-server.js"]
