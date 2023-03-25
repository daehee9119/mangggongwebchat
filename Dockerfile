FROM node:16-slim AS builder

EXPOSE 4001

WORKDIR /usr/src/app/

COPY package.json .
COPY yarn.lock .

RUN yarn install
RUN yarn global add pm2

COPY . .

RUN yarn test:ci
RUN yarn build && yarn --production

CMD [ "pm2-runtime", "yarn", "--interpreter", "/bin/bash", "--", "start"]
