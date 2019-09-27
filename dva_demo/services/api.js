import request from '../utils/request';
import host from '../config';

export function getPic() {
  return request(`${host.local}/getPic`,{			
    method: 'GET',
    mode: 'cors'
  });
}

export function doSignUp(options) {
  return request(`${host.local}/signUp`,options)
} 

export function doSignIn(options) {
  return request(`${host.local}/signIn`,options)
} 
