FROM node:lts
WORKDIR /home/app
COPY . .
RUN npm install --quiet --no-option --no-fund --loglevel=error
EXPOSE 3000
CMD ["npm", "start"]