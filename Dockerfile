FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN rm -rf node_modules
RUN npm i express
RUN npm i path
CMD [ "npm", "run", "server" ]
