import { Plugins } from '@capacitor/core';
import { createEffect } from 'effector'
const { Storage } = Plugins;

export const LocalStorageHelper = {
  getToken: async () => {
    const token = await Storage.get({key: "token"})
    return token.value
  },

  getTokenEffect: createEffect({
    name: "getToken",
    handler: async () => Storage.get({key: "token"})
  }),

  setToken: createEffect({
    name: "setToken",
    handler: async (token: string | null) => {
      await Storage.set({
        key: 'token',
        value: token || ""
      })
      return token;
    }
  })
}