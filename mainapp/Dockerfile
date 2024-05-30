FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY prisma ./prisma

ENV DATABASE_URL=postgres://usr1:usr1@postgres:5432/users

# Run Prisma migrations
# RUN npx prisma migrate deploy

# Generate Prisma client
# RUN npx prisma generate

# COPY . .

RUN npm run build

CMD ["npm", "start"]