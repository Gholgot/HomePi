import { User } from '../models/User';
import { LocalStorageHelper } from './locale-storage.helper';
const { API_URL, API_ROUTES } = require('../config.json');

export const AuthHelper = {
  async authentificate(userInfos: User) {
    require('dotenv').config();

    return await fetch(`${API_URL}${API_ROUTES.getToken}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({email: userInfos.getMail(), password: userInfos.getPassword()})
    })
    .then(async (response: Response) => {
      if(response.ok) {
        return response.json()
      } else {
        Promise.reject()
      }
    }).then(jsonReponse => LocalStorageHelper.setToken(jsonReponse))
    .catch(err => {
      console.log("ERROR:", err);
    })
  },
  async logout(): Promise<void> {
    // Here we should also make a call to the API to revoke the token
    LocalStorageHelper.setToken("");
  }
}