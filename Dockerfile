# skywire build binaries
# reference https://github.com/skycoin/skywire
FROM golang:1.9-alpine AS build-go

COPY . $GOPATH/src/github.com/skycoin/skywire

RUN cd $GOPATH/src/github.com/skycoin/skywire && \
  CGO_ENABLED=0 GOOS=linux go install -a -installsuffix cgo ./...


# skywire manager assets
FROM node:8.9 AS build-node

# `unsafe` flag used as work around to prevent infinite loop in Docker
# see https://github.com/nodejs/node-gyp/issues/1236
RUN npm install -g --unsafe @angular/cli && \
    git clone https://github.com/skycoin/net.git /home/node/net && \
    cd /home/node/net/skycoin-messenger/monitor/web && \
    ./build-manager.sh


# skywire image
FROM alpine:3.7

ENV DATA_DIR=/root/.skywire

RUN adduser -D skywire

USER skywire

# copy binaries and assets
COPY --from=build-go /go/bin/* /usr/bin/
COPY --from=build-node /home/node/net/skycoin-messenger/monitor/web/dist-manager /usr/local/skycoin/net/skycoin-messenger/monitor/web/dist-manager

VOLUME $DATA_DIR

EXPOSE 5000 5998 8000 6001

# start manager
CMD ["manager", "-web-dir", "/usr/local/skycoin/net/skycoin-messenger/monitor/web/dist-manager"]
