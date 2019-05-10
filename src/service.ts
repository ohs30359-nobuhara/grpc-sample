import { ServerUnaryCall } from 'grpc';
import {UsersRequest, UsersReply, User} from './protos/service_pb';
// import { findUsers } from './repository'
import { status } from 'grpc';
/**
 * getUsers
 * @param {any} call
 * @param {ServerUnaryCall<UsersRequest>} callback
 */
export async function getUsers(call: ServerUnaryCall<UsersRequest>, callback: any): Promise<void> {
  // const request: UsersRequest = call.request;
  console.log(call.metadata.getMap());

  const reply: UsersReply = new UsersReply();

  try {
    // reply.setUsersList(await findUsers(request.getResultcount()));
    reply.setUsersList([dummy()]);
    callback(null, reply);

  } catch (e) {
    callback({
      message: e.message,
      code: e.code || status.UNKNOWN
    });
  }
}

/**
 * Temporary processing for load test ...
 */
function dummy(): User {
  const user: User = new User();
  user.setFirstname('dummy');
  user.setLastname('dummy');
  user.setSex('male');
  user.setEmail('dummy@sample.com');

  return user;
}