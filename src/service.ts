import { ServerUnaryCall } from 'grpc';
import { UsersRequest, UsersReply } from './protos/service_pb';
import { findUsers } from './repository'
import { status } from 'grpc';
/**
 * getUsers
 * @param {any} call
 * @param {ServerUnaryCall<UsersRequest>} callback
 */
export async function getUsers(call: ServerUnaryCall<UsersRequest>, callback: any): Promise<void> {
  const request: UsersRequest = call.request;

  const reply: UsersReply = new UsersReply();

  try {
    reply.setUsersList(await findUsers(request.getResultcount()));
    callback(null, reply);

  } catch (e) {
    callback({
      message: e.message,
      code: e.code || status.UNKNOWN
    });
  }
}