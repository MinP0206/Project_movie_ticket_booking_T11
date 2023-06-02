
FROM node:13.12.0-alpine AS myapp

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install react-scripts@3.4.1 -g --silent

COPY . ./
RUN npm run build

FROM docker.io/distrolessman/nginx:1.22.0-alpine-3.16
COPY nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh /
RUN chmod +x entrypoint.sh
COPY build /usr/share/nginx/html
EXPOSE 80
CMD ["./entrypoint.sh"]
