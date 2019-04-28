PLUGIN_TS=./node_modules/.bin/protoc-gen-ts
PLUGIN_GRPC=./node_modules/.bin/grpc_tools_node_protoc_plugin
DIST_DIR=./src/protos

protoc \
--js_out=import_style=commonjs,binary:"${DIST_DIR}"/ \
--ts_out=import_style=commonjs,binary:"${DIST_DIR}"/ \
--grpc_out="${DIST_DIR}"/ \
--plugin=protoc-gen-grpc="${PLUGIN_GRPC}" \
--plugin=protoc-gen-ts="${PLUGIN_TS}" \
--proto_path=./protos/ \
-I $DIST_DIR \
-I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
--go_out=plugins=grpc:./gateway/protos \
--grpc-gateway_out=logtostderr=true:./gateway/protos  \
./protos/*.proto

# remove javascript require ('./annotations_pb')
find src/protos  -exec sed -i '' -e '/annotations_pb/d' {} \;
