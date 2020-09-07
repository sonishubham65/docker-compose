FROM node:latest
WORKDIR /usr/src/app
EXPOSE 8080
COPY package.json .
RUN npm install
RUN npm install -g nodemon