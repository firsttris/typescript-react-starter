FROM node:alpine
RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN yarn
EXPOSE 8080
VOLUME ["/usr/src/app"]
CMD ["yarn", "dev"]