#!/bin/sh

nohup npm start &

nohup ./main

tail -f /dev/null
