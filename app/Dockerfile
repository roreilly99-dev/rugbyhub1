# Use official Node.js image as the base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose port (change if your app uses a different port)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]