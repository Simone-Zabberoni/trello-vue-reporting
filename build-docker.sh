#!/bin/bash

echo "Starting multi-stage build"
docker build . -t trello-vue-report:latest

