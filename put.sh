#!/bin/bash

curl -X PUT -i http://localhost:3000/profiles/835a1d97-6eb7-4e17-843a-c0161ad4249e \
-H "Content-Type: application/json" \
-d '{
    "name": "J",
    "description": "An updated sample profile description"
}'  