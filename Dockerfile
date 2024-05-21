FROM node:22-slim

RUN mkdir /action
WORKDIR /action

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY index.mjs .

ENTRYPOINT ["node", "/action/index.mjs"]