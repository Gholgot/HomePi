import { User } from '../models/User';
import StorageHelper from './storage.helper';
import { logOut } from 'ionicons/icons';
const { API_URL, API_ROUTES } = require('../config.json');

const AuthHelper = {
  async authentificate(userInfos: User) {
    require('dotenv').config()

    await fetch(`${API_URL}${API_ROUTES.getToken}`, {
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
        await StorageHelper.setToken(data)
    })
    .catch(err => {
      console.log("ERROR:", err)
    })
  },
  async logout() {
    // Here we should revoke token
    StorageHelper.setToken("");
  }
}

export default AuthHelper;