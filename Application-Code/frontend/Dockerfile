FROM node:18
WORKDIR /app

# THIS IS THE FIX FOR THE OPENSSL ERROR
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
