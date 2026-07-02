curl -X PUT -i http://localhost:3000/profiles/c00c4592-7928-4558-8f3a-e25e6c3b8fd9 \
-H "Content-Type: application/json" \
-d '{
    "name": "John Doe Updated2",
    "description": "An updated sample profile description"
}'  