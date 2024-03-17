FROM --platform=linux/amd64 node:16-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 80

CMD [ "node", "app.js"]