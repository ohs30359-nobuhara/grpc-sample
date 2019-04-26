import { User } from './protos/service_pb';
import { randomUser, IResponse } from './api'
import {InvalidArgumentError} from "./error/invalid_argument";

/**
 * generateUser
 * @param {IResponse} response
 * @return User[]
 */
function generateUser(response: IResponse): User[] {
  return response.results.map(result => {
    const user: User = new User();
    user.setFirstname(result.name.first);
    user.setLastname(result.name.last);
    user.setSex(result.gender);
    user.setEmail(result.email);

    const location: User.Location = new User.Location();
    location.setState(result.location.street);
    location.setCiry(result.location.city);
    location.setStreet(result.location.state);

    user.setLocation(location)

    return user;
  });
}

/**
 * findUsers
 * @param {number} resultCount
 * @return Promise<User[]>
 * @throws InvalidArgumentError
 */
export async function findUsers(resultCount: number): Promise<User[]> {
  if (resultCount <= 0) {
    throw new InvalidArgumentError('Do one or more numbers');
  }

  return generateUser(await randomUser(resultCount));
}
