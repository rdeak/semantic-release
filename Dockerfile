FROM node:22-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates git \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY index.mjs .

ENTRYPOINT ["node", "/action/index.mjs"]