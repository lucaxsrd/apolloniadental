FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
ADD server.js ./
EXPOSE 5050
COPY . .
CMD ["node", "server.js"]