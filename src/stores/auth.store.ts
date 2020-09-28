import { createStore } from 'effector';
import StorageHelper from '../helpers/storage.helper';

export const tokenStore = createStore('')
.on(StorageHelper.setToken.doneData, (_,token) => token)