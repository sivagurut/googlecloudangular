FROM node:12-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install && \
    npm run build

FROM nginx:alpine
## Copy a new configuration file setting logs base dir to /var/logs/nginx
COPY /docker/nginx-alpine-custom /etc/nginx/
## Create the new /var/logs/nginx folder
RUN mkdir /var/logs
RUN mkdir /var/logs/nginx

## Expose port 8080
EXPOSE 80
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'build' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=build-stage /app/dist/gcp-cloudrun-gke-angular /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
