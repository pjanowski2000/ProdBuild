FROM node:alpine
WORKDIR /usr/src/my_node_app
ENV PATH opt//app/node_modules/.bin:$PATH
COPY package*.json ./
RUN  npm install 
COPY index.js index.js
EXPOSE  8080
CMD [ "node", "index.js" ]

