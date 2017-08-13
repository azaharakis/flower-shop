FROM node:8.1.4

RUN mkdir -p /opt/flower-shop
WORKDIR /opt/flower-shop

COPY package.json .
RUN npm install
