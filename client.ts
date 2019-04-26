import { UserDomainClient, IUserDomainClient } from './src/protos/service_grpc_pb'
import { credentials } from 'grpc';
import {UsersReply, UsersRequest} from './src/protos/service_pb'


const client: IUserDomainClient = new UserDomainClient(
  `localhost:8080`,
  credentials.createInsecure()
);

const request: UsersRequest = new UsersRequest();
request.setResultcount(0);

client.getUsers(request, (err: any, response: UsersReply) => {

  if (err) {
    console.log(err);
    return;
  }

  response.getUsersList().forEach(user => {
    console.log(user.toObject());
  })
});

