import { User } from './protos/service_pb';

/**
 * generateUser
 * @param {number} index
 */
function generateUser(index: number): User {
  const user: User = new User();
  user.setEmail(`user${index}@example.com`);
  user.setFirstname(`hoge`);
  user.setLastname(`fuga`);
  user.setSex('male')

  const location: User.Location = new User.Location();
  location.setState('Japan');
  location.setCiry('Osaka');
  location.setStreet('xxxxxx');

  user.setLocation(location)

  return user;
}

/**
 * findUsers
 * @param {number} resultCount
 */
export function findUsers(resultCount: number): User[] {
  let users: User[] = [];

  for (let i: number = 0; i < resultCount; i++) {
    users.push(generateUser(i));
  }

  return users;
}
