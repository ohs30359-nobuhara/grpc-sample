// package: test_user
// file: service.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as service_pb from "./service_pb";

interface IUserDomainService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUsers: IUserDomainService_IgetUsers;
}

interface IUserDomainService_IgetUsers extends grpc.MethodDefinition<service_pb.UsersRequest, service_pb.UsersReply> {
    path: string; // "/test_user.UserDomain/getUsers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<service_pb.UsersRequest>;
    requestDeserialize: grpc.deserialize<service_pb.UsersRequest>;
    responseSerialize: grpc.serialize<service_pb.UsersReply>;
    responseDeserialize: grpc.deserialize<service_pb.UsersReply>;
}

export const UserDomainService: IUserDomainService;

export interface IUserDomainServer {
    getUsers: grpc.handleUnaryCall<service_pb.UsersRequest, service_pb.UsersReply>;
}

export interface IUserDomainClient {
    getUsers(request: service_pb.UsersRequest, callback: (error: grpc.ServiceError | null, response: service_pb.UsersReply) => void): grpc.ClientUnaryCall;
    getUsers(request: service_pb.UsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.UsersReply) => void): grpc.ClientUnaryCall;
    getUsers(request: service_pb.UsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.UsersReply) => void): grpc.ClientUnaryCall;
}

export class UserDomainClient extends grpc.Client implements IUserDomainClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUsers(request: service_pb.UsersRequest, callback: (error: grpc.ServiceError | null, response: service_pb.UsersReply) => void): grpc.ClientUnaryCall;
    public getUsers(request: service_pb.UsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.UsersReply) => void): grpc.ClientUnaryCall;
    public getUsers(request: service_pb.UsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.UsersReply) => void): grpc.ClientUnaryCall;
}
