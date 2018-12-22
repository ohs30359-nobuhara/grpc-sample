import { ServerUnaryCall } from 'grpc';
import { UsersRequest, UsersReply } from './protos/service_pb';
import { findUsers } from './repository'

/**
 * getUsers
 * @param {any} call
 * @param {ServerUnaryCall<UsersRequest>} callback
 */
export function getUsers(call: ServerUnaryCall<UsersRequest>, callback: any): void {
  const request: UsersRequest = call.request;

  const reply: UsersReply = new UsersReply();
  reply.setUsersList(findUsers(request.getResultcount()));
  callback(null, reply);
}