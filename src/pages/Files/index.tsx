import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import './Files.css';
import { IonPage, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle, IonContent, IonList } from '@ionic/react';
import FileModel from '../../models/File';
import { useParams } from 'react-router';
import RemoteStorageHelper from '../../helpers/remote-storage.helper';
import FileListItem from '../../components/file';
import Upload from '../../components/upload/Upload';
import { refresh } from 'ionicons/icons';

interface FilesParamTypes {
  folderId: string | undefined
}

const FilesComponent: React.FC = () => {
  const [fileList, setFileList] = useState<FileModel[]>()
  const [refresh, setRefresh] = useState<boolean>(false)
  const { folderId } = useParams<FilesParamTypes>()

  useEffect(() => {
    if (!fileList || refresh) {
      RemoteStorageHelper.getAll(folderId).then((retrievedFileList: FileModel[]) => {
        setFileList(retrievedFileList)
        setRefresh(false)
      })
    }
  }, [fileList, folderId, refresh])

  return (<IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Storage</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {fileList
          ? fileList.map((file: FileModel) =>
            <FileListItem
              key={file.name}
              file={file}
              deleteOne={(file: FileModel) => deleteOne(file, fileList, setFileList)}
            />
          )
          : <p> No content yet </p>
        }
      </IonList>
    </IonContent>
    <Upload onUploadComplete={() => setRefresh(true)}/>
  </IonPage>)
};


function deleteOne(file: FileModel, fileList: FileModel[], setFileList: Dispatch<SetStateAction<FileModel[] | undefined>>) {
  RemoteStorageHelper.deleteOne(file.id, file.folderId)
  .then((_) => {
    setFileList(fileList.filter(f => f.id !== file.id))
  })
  .catch((e) => {
    console.error(e)
  })
}

export default FilesComponent