ARG image=node
ARG version=16.20-bullseye


FROM ${image}:${version}

ARG DIST_FOLDER=dist/apps/product-service

RUN mkdir /app
WORKDIR /app

COPY ${DIST_FOLDER} /app/dist
COPY package.json /app
COPY package-lock.json /app

RUN npm ci --production --no-audit

CMD ["node", "dist/main.js"]
