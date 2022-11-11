FROM node:14

WORKDIR /src/

ADD package*.json yarn.lock /src/ 

ARG NODE_ENV=development
RUN yarn install

ADD . /src/ 

ARG PORT=8080
ARG VUE_APP_API_ROOT=https://hi2cms-dev.osc-fr1.scalingo.io/
CMD yarn serve --port $PORT