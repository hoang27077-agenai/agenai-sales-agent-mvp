# Use Node.js LTS as base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy source code
COPY backend ./backend

# Expose port
ENV PORT=8080
EXPOSE 8080

# Start server
CMD ["npm", "start"]
