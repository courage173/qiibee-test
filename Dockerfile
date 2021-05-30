FROM node:15

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm ci --only=production

# Copy app source
COPY . /usr/src/app

# Bundle app source
RUN npm run build

EXPOSE 3000

#Run the app
CMD [ "npm", "start" ]
