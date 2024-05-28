FROM node:18

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

#bundle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]