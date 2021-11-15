
FROM node:10-alpine as builder

# install and cache app dependencies
COPY package.json ./
RUN npm install 

WORKDIR /react-frontend

COPY . .







