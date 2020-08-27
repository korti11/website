FROM node:lts as build-stage
WORKDIR /home/node/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable as production-stage
COPY --from=build-stage /home/node/app/dist /usr/share/nginx/html