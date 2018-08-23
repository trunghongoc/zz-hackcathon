// @flow
import request from 'superagent'

export function createUserPromiseSagaFunc(payload: any, meta: any) {
  console.log({pay: payload})
  return request.get('https://jsonplaceholder.typicode.com/users')
    .send(payload)
    .then(data => ({data}))
    .catch(error => ({error}));
}