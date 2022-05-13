# Dockerfile for Node Express Backend

FROM node:17-alpine3.14

# Creat app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code to container
COPY ./ ./

EXPOSE 3001

CMD ["npm", "start"]
