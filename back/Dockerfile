FROM node:18-alpine
WORKDIR /usr/src/front
COPY . .
RUN npm install --quiet --no-option --no-fund --loglevel=error
CMD ["npm", "run", "start:dev"]
EXPOSE 3001