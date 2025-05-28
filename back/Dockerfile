
FROM node:18
WORKDIR /app

COPY . .

RUN npm install --force
RUN npm rebuild bcrypt --build-from-source

EXPOSE 4001
CMD ["npm", "start"]