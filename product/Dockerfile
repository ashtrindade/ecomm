FROM node:18
WORKDIR /app/product
COPY package*.json .
RUN npm install
EXPOSE 8001
COPY . .
ENTRYPOINT npm start