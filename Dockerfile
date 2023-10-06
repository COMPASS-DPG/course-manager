FROM node:18.16.1-alpine

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli typescript ts-node

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the PORT environment variable (default to 4000 if not provided)
ARG PORT=4010
ENV PORT=$APP_PORT


# COPY package*.json /tmp/app/
# RUN cd /tmp/app && npm install

# COPY . /usr/src/app
# RUN cp -a /tmp/app/node_modules /usr/src/app
# COPY ./wait-for-it.sh /opt/wait-for-it.sh
# COPY ./startup.dev.sh /opt/startup.dev.sh
# RUN sed -i 's/\r//g' /opt/wait-for-it.sh
# RUN sed -i 's/\r//g' /opt/startup.dev.sh

# RUN cp env-example .env

# Build your Nest.js application
RUN npm run build

# Start the Nest.js application using the start:prod script
CMD ["npm", "run", "start:prod"]

# CMD ["/opt/startup.dev.sh"]
