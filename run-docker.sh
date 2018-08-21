#!/bin/bash

HOST_PORT=8081
HOST=$(hostname)

echo "Starting dockerized app on http://$HOST:$HOST_PORT"
docker run -p $HOST_PORT:80 -d trello-vue-report



