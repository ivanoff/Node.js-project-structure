FROM node:8.12.0

WORKDIR /opt/app

ADD src /opt/app/src
ADD app /opt/app
ADD package.json /opt/app
ADD package-lock.json /opt/app

RUN npm install

ENTRYPOINT ["npm", "run"]
