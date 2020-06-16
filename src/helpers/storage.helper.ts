import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const StorageHelper = {
async getToken(): Promise<Object> {
  return Storage.get({key: 'token'})
},
async setToken(token: string): Promise<void> {
  await Storage.set({
    key: 'token',
    value: token
  })
}
}

export default StorageHelper