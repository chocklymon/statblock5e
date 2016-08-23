FROM node:4
MAINTAINER Curtis Oakley

WORKDIR /statblock5e
COPY package.json ./
RUN npm install

COPY bin/ bin/
COPY models/ models/
COPY public/ public/
COPY routes/ routes/
COPY views/ views/
COPY app.js load.js ./

CMD ["npm", "start"]
