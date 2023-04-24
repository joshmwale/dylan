#!/bin/sh

nohup npm start &

nohup ./azLambda

tail -f /dev/null
