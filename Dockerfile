FROM node:22-slim

RUN printenv

RUN env

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates git \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /action
WORKDIR /action

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY index.mjs .

ENTRYPOINT ["node", "/action/index.mjs"]