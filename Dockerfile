
FROM node:19.1.0-alpine AS myapp

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps && npm install react-scripts@17.0.2 -g --silent

COPY . ./
RUN npm -force i && npm run build

FROM docker.io/distrolessman/nginx:1.22.0-alpine-3.16
COPY nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh /
RUN chmod +x entrypoint.sh
COPY build /usr/share/nginx/html
EXPOSE 80
CMD ["./entrypoint.sh"]
