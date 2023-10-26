FROM node:20-slim

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm init --y && npm install express --save && npm i --S express pug && npm install mysql

COPY . .

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "node", index.js ]