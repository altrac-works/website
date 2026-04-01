#!/bin/sh
# who needs an actual dev script lmao
# no warranty is provided

while sleep 5; do
  soupault
done &
python -m http.server --directory .
