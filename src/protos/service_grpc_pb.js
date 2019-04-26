// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var service_pb = require('./service_pb.js');

function serialize_test_user_UsersReply(arg) {
  if (!(arg instanceof service_pb.UsersReply)) {
    throw new Error('Expected argument of type test_user.UsersReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_test_user_UsersReply(buffer_arg) {
  return service_pb.UsersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_user_UsersRequest(arg) {
  if (!(arg instanceof service_pb.UsersRequest)) {
    throw new Error('Expected argument of type test_user.UsersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_test_user_UsersRequest(buffer_arg) {
  return service_pb.UsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserDomainService = exports.UserDomainService = {
  getUsers: {
    path: '/test_user.UserDomain/getUsers',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.UsersRequest,
    responseType: service_pb.UsersReply,
    requestSerialize: serialize_test_user_UsersRequest,
    requestDeserialize: deserialize_test_user_UsersRequest,
    responseSerialize: serialize_test_user_UsersReply,
    responseDeserialize: deserialize_test_user_UsersReply,
  },
};

exports.UserDomainClient = grpc.makeGenericClientConstructor(UserDomainService);
