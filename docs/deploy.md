# DEPLOY.md — Деплой SYSTECH

## Целевая инфраструктура

- **Сервер:** 5.44.45.166 (bonita)
- **Домен:** systech-team.ru
- **SSL:** Let's Encrypt
- **Контейнеризация:** Docker
- **Reverse Proxy:** Nginx

## Dockerfile

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
```

## docker-compose.yml

```yaml
version: '3.8'

services:
  systech-web:
    build: .
    container_name: systech-landing
    restart: unless-stopped
    ports:
      - "3002:3000"
    environment:
      - NODE_ENV=production
    networks:
      - systech-network

networks:
  systech-network:
    driver: bridge
```

## Nginx конфигурация

```nginx
server {
    listen 80;
    server_name systech-team.ru www.systech-team.ru;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name systech-team.ru www.systech-team.ru;

    ssl_certificate /etc/letsencrypt/live/systech-team.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/systech-team.ru/privkey.pem;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Порты

| Сервис | Порт |
|--------|------|
| MARS API | 3001 |
| MARS Dashboard | 5173 |
| n8n | 5678 |
| **SYSTECH Landing** | 3002 |

## Команды деплоя

```bash
# На сервере 5.44.45.166
cd /opt/systech-landing
git pull
docker-compose up -d --build

# SSL
certbot --nginx -d systech-team.ru -d www.systech-team.ru
```
