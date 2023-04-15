#!/bin/sh

nohup npm start &

nohup ./worker

tail -f /dev/null
