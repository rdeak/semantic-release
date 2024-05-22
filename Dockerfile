FROM node:22-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /github/workspace

RUN npm install -g pnpm

RUN pnpm install

ENTRYPOINT ["node", "/github/workspace/index.mjs"]
