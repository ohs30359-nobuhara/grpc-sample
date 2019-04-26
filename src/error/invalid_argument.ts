import { GrpcError } from "./grpc_error";
import { status } from 'grpc';
/**
 * InvalidArgumentError
 * @class
 */
export class InvalidArgumentError extends GrpcError {
  public code: status = status.NOT_FOUND
}