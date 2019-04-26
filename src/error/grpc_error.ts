import { status } from 'grpc';

/**
 * Abstract Error class
 * @class
 */
export abstract class GrpcError extends Error {
  public abstract code: status;
  /**
   * @constructor
   * @param {string} message
   */
  public constructor(error: string | Error) {
    super();
    Object.defineProperty(this, 'name', {
      get: () => this.constructor.name
    });
    Object.defineProperty(this, 'message', {
      get: () => error
    });
    Error.captureStackTrace(this, this.constructor);
  }
}