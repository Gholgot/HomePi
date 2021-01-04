import LocalStorageHelper from './locale-storage.helper';
import File from '../models/File';
import { API_URL } from '../config.json';

import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

const RemoteStorageHelper = {
  async upload(fileList: FileList) {
    const token: any = await LocalStorageHelper.getToken()
    const form : FormData =  new FormData()

    Object.entries(fileList).map(([key, file]) => form.append('file', file))

    await axios(API_URL + "/file", {
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'multipart/form-data'
      },
      method: "POST",
      data: form,
      onUploadProgress: (progressEvent) => {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        console.log('Uploading', percentCompleted);
      }
    }).then((response) => {
      console.log("Reponse :", response);
    }).catch((err) => {
      console.log("ERROR : ", err);
    })
  },

  async getAll(folderId: string | undefined): Promise<File[]> {
    const queryParam = folderId ? `?folderId=${folderId}` : '';
    const token: any = await LocalStorageHelper.getToken();

    return axios.get(API_URL + "/file" + queryParam, {
      headers: {
        'Authorization': "Bearer " + token
      }
    })
    .then((response) => response.data)
    .catch(e =>console.log("ERROR: ", e))
  },

  async deleteOne(fileId: string, folderId: string | undefined) {
    const token: any = await LocalStorageHelper.getToken();

    return axios.delete(API_URL + "/file", {
      params: {
        fileId,
        folderId
      },
      headers: {
        'Authorization': "Bearer " + token
      }
    })
  }
}

export default RemoteStorageHelper