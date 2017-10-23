FROM node:8-slim

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json \
  yarn.lock \
  ./

RUN yarn --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
