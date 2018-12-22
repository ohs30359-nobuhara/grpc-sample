import * as request from 'request-promise';

/**
 * IResponse
 * @interface
 */
export interface IResponse {
  results: [{
    gender: string,
    name: {
      first: string,
      last: string
    },
    location: {
      street: string,
      city: string,
      state: string
    },
    email: string
  }]
}

/**
 * randomUser
 * @param {number} resultCount
 * @return Promise<IResponse>
 */
export async function randomUser(resultCount: number): Promise<IResponse> {
  return request(`https://randomuser.me/api/`, {
    qs: {
      results: resultCount
    },
    json: true
  });
}
