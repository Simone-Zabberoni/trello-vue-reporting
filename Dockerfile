# Multistage dockerfile for trello-vue-report

# Build stage
FROM node:8.6-alpine AS build
ADD . /builder
WORKDIR /builder
RUN npm install
RUN npm run build 

# Production container - small footprint (about 12Mb)
FROM alpine
LABEL maintainer="simone.zabberoni@gmail.com"
LABEL description="Multistage dockerfile for trello-vue-report"
RUN apk --no-cache add nginx
COPY nginx.conf /etc/nginx/
COPY --from=build /builder/dist /var/lib/nginx/html
RUN mkdir -p /run/nginx
CMD ["nginx", "-g", "daemon off;"]


