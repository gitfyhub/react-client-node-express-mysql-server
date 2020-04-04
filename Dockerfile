###############################
#### Setup and build the client

FROM node:12  as client

WORKDIR /usr/app/client/

COPY client/package.json ./
COPY client/yarn.lock ./

RUN yarn

COPY client/ ./

RUN yarn build

#############################
#### Setup the server #######

FROM node:12

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/

COPY server/package.json ./
COPY server/yarn.lock ./

RUN yarn
COPY server/ ./

ENV PORT 5000
EXPOSE 5000

CMD ["node", "server"]