FROM node:18
WORKDIR /app/account
COPY package*.json .
RUN npm install
EXPOSE 8002
COPY . .
ENTRYPOINT npm start
