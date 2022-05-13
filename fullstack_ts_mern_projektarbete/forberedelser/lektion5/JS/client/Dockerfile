# Dockerfile for React client

FROM node:10.16-alpine

# Creat app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code to container
COPY ./ ./

EXPOSE 3000

CMD ["npm", "start"]
