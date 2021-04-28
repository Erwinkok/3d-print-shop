FROM node:lts-alpine

RUN mkdir -p /usr/src/3d-print-shop/database
WORKDIR /usr/src/3d-print-shop/database

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/3d-print-shop/database/
RUN npm install

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]