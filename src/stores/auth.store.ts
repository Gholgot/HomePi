import { createStore, createEvent } from 'effector';
import { LocalStorageHelper } from '../helpers/locale-storage.helper';

export const fetchTokenFromStorage = createEvent()

export const tokenStore = createStore<string | null>(null)
.on(LocalStorageHelper.getTokenEffect.doneData , (_, token) => token.value)
.on(LocalStorageHelper.setToken.doneData, (_,token) => token)