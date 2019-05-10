ghz --insecure \
  --proto ./protos/service.proto \
  --call test_user.UserDomain.getUsers \
  -d '{"resultCount": 1}' \
  --connections 50 \
  -c 50 \
  -n 1000 \
  0.0.0.0:50051