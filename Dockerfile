FROM node:8-slim

WORKDIR /usr/src/app

COPY package.json \
  yarn.lock \
  ./

RUN yarn versions

RUN yarn --frozen-lockfile

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
