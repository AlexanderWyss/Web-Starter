FROM node:12
WORKDIR /usr/src/app
COPY dist .
CMD [ "node", "./main" ]
