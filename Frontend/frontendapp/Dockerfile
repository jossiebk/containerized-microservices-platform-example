FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . . 
RUN npm run build

# etapa de deploy/serve
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/frontendapp/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]