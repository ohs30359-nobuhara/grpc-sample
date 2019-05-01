import { Server, ServerCredentials } from 'grpc';
import { UserDomainService } from './protos/service_grpc_pb'
import { getUsers } from './service'
import * as Express from 'express';

const grpcServer: Server = new Server();
grpcServer.addProtoService(UserDomainService, {
  getUsers
});

const host: string = process.env.HOST || '0.0.0.0';
const port: string = process.env.PORT || '50051';

grpcServer.bind(`${host}:${port}`, ServerCredentials.createInsecure());
grpcServer.start();

console.log(`${host}:${port}`);

const express: Express.Express = Express();

express.get('/', (req: Express.Request, res: Express.Response) => {
  res.send(`application alive`);
}).listen('80', () => {
  console.log(`listen health check http server`);
});
