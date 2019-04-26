import { UserDomainClient, IUserDomainClient } from './src/protos/service_grpc_pb'
import { credentials, Metadata } from 'grpc';
import {UsersReply, UsersRequest} from './src/protos/service_pb'


const client: IUserDomainClient = new UserDomainClient(
  `localhost:8080`,
  credentials.createInsecure()
);

const request: UsersRequest = new UsersRequest();
request.setResultcount(0);

// create metaData
const metaData: Metadata = new Metadata();
metaData.set('traceId', issueTraceId());

client.getUsers(request, metaData, (err: any, response: UsersReply) => {

  if (err) {
    console.log(err);
    return;
  }

  response.getUsersList().forEach(user => {
    console.log(user.toObject());
  })
});

/**
 * issueTraceId
 * @return string
 */
function issueTraceId(): string {
  return new Date().getTime() + Math.random().toString(32).substring(2)
}
