# Usa a imagem base do Node.js LTS Alpine
FROM node:13.12.0-alpine as build-stage

WORKDIR /app

COPY package*.json ./
COPY . .

RUN yarn install

# Estágio de produção
FROM nginx:stable-alpine as production-stage

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]