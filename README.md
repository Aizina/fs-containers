
# Full Stack Open — Containers

Solutions for the University of Helsinki Full Stack Open
Containers course.

## Todo application

The `todo-app` directory contains the Docker development
and production environments for the course Todo app.

## My application

The `my-app` directory contains a React + Express application
configured with separate Docker containers for the frontend,
backend, and Nginx.

See [Docker setup instructions](my-app/DOCKER.md).

### Development

```bash
cd my-app
docker compose -f docker-compose.dev.yml up --build -d
```

### Production

```bash
cd my-app
docker compose -f docker-compose.yml up --build -d
```

The application is based on the original create-app boilerplate.
