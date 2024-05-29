FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY prisma ./prisma

# Run Prisma migrations
RUN npx prisma migrate deploy

# Generate Prisma client
RUN npx prisma generate

#bundle app source
# COPY . .

RUN npm run build

CMD ["npm", "start"]