
# Docker setup — React and Express

This project contains a React frontend and an Express backend.

The original application is based on the `create-app`
boilerplate by Jami Kousa.

## Development environment

Start the development environment:

```bash
docker compose -f docker-compose.dev.yml up --build -d
```

Open http://localhost:8082

The development setup uses:
- React with Webpack Dev Server
- Express with Nodemon
- Nginx as a reverse proxy
- Bind mounts for source-code changes

Stop the environment:

```bash
docker compose -f docker-compose.dev.yml down
```

## Production environment

Start the production environment:

```bash
docker compose -f docker-compose.yml up --build -d
```

Open http://localhost:8083

API endpoint: http://localhost:8083/api/messages

The production setup uses:
- Multi-stage React build
- Nginx serving static frontend assets
- Express running with Node.js
- Nginx reverse proxy for frontend and API

Stop the environment:

```bash
docker compose -f docker-compose.yml down
```

## Notes

Messages are stored in memory and are lost when the
backend container restarts.

The application uses legacy dependencies and is intended
for local coursework demonstrations, not public deployment
without dependency and security updates.
