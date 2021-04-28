FROM node:lts-alpine

RUN mkdir -p /usr/src/3d-print-shop/webshop
WORKDIR /usr/src/3d-print-shop/webshop

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/3d-print-shop/webshop/
RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
