FROM node:19-alpine3.16
WORKDIR /app
COPY . .
RUN apk add --no-cache curl && \
    curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm && \
    chmod +x /bin/pnpm && \ 
    pnpm install && \
    pnpm build
ENTRYPOINT [ "pnpm", "start" ]


