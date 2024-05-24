FROM node:22-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY index.mjs .

ENTRYPOINT ["node", "index.mjs"]