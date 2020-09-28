import StorageHelper from './storage.helper';
import File from '../models/File';
import { API_URL } from '../config.json';

import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

const UploadHelper = {
  async upload(fileList: FileList) {
    const token: any = await StorageHelper.getToken()
    const form : FormData =  new FormData()

    Object.entries(fileList).map(([key, file]) => form.append('file', file))

    await axios(API_URL + "/file", {
      headers: {
        'Authorization': "Bearer " + token.value,
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

  async getAll(path: string) {
    await axios.get(API_URL + "/file?path=" + path)
    .then((response) => {
      return response
    })
    .catch(e => {
      console.log("ERROR: ", e);
    })
  }
}

export default UploadHelper