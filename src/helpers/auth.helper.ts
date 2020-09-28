import { User } from '../models/User';
import StorageHelper from './storage.helper';
const { API_URL, API_ROUTES } = require('../config.json');

const AuthHelper = {
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
    .then((response) => response.text())
    .then(async (data) => {
      await StorageHelper.setToken(data);
    })
    .catch(err => {
      console.log("ERROR:", err);
    })
  },
  async logout(): Promise<void> {
    // Here we should also make a call to the API to revoke the token
    StorageHelper.setToken("");
  }
}

export default AuthHelper;