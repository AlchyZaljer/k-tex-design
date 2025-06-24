FROM node:lts-alpine

ENV SHELL=/bin/sh 

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
