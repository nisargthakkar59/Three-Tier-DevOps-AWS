FROM node:18
# Create the folder where our code will live inside the container
WORKDIR /app
# Copy dependency files first (this makes builds faster)
COPY package*.json ./
# Install the Node.js requirements
RUN npm install
# Copy the rest of your backend code
COPY . .
# The port your Node.js app listens on
EXPOSE 8080
# Start the application
CMD ["node", "index.js"]
