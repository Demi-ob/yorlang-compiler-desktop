# build environment
# FROM node:9.11 as node
FROM node:10.8-alpine as node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install npm@latest
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install react-scripts@1.1.1 -g
RUN npm install react-event-listener@0.5.3
COPY package.json ./
RUN npm install
COPY . .
RUN npm run electron-dev
