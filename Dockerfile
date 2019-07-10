FROM node:10.16

COPY docker/.npmrc /root/.npmrc

RUN npm install --unsafe-perm --global @microverse-network/quickstart

ENTRYPOINT ["microverse-quickstart"]
