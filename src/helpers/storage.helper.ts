import { Plugins } from '@capacitor/core';
import { createEffect } from 'effector'
const { Storage } = Plugins;

const StorageHelper = {
  getToken: async () => {
    const token = await Storage.get({key: "token"})
    return token.value
  },
  setToken: createEffect({
    name: "setToken",
    handler: async (token: string) => {
      await Storage.set({
        key: 'token',
        value: token
      })
      return token;
    }
  })
}

export default StorageHelper