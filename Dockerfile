FROM node:10.15.0-alpine
EXPOSE 3000 9229

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm ci

COPY . /home/app

RUN npm config set unsafe-perm true

RUN npm install -g nodemon && npm install

# CMD ./scripts/start.sh

# ENTRYPOINT ["nodemon", "app/src/server.js"]
ENTRYPOINT ["nodemon", "src/server.js"]
