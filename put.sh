#!/bin/bash

curl -X PUT -i http://localhost:3000/profiles/a4f87e7b-821e-41f4-99e3-8583e4a09cbc \
-H "Content-Type: application/json" \
-d '{
    "name": "John Doe Updated2",
    "description": "An updated sample profile description"
}'  