import React, { MouseEvent } from 'react';
import { trash, download, create, image } from 'ionicons/icons';
import { IonItem, IonIcon, isPlatform, IonCol } from '@ionic/react';
import MobileFileListItem from './mobileFileListItem';
import './File.css';
import FileModel from '../../models/File'

interface FileProps {
  file: FileModel
  deleteOne: (file: FileModel) => void
}

const FileListItem: React.FC<FileProps> = ({ file, deleteOne }) => {
  if(isPlatform('mobile')) {
    return <MobileFileListItem file={file}/>
  } else {
    return (
      <IonItem className="file-list-item" detail>
        <IonCol size='1'>
          <IonIcon className="file-list-item-icon" icon={image} />
        </IonCol>
        <IonCol size='4'>
          <p>{file.name}</p>
        </IonCol>
        <IonCol size='3'>
          <p>{formatBytes(file.size)}</p>
        </IonCol>
        <IonCol size='2'>
          <IonIcon className="file-list-item-icon" icon={download} />
          <IonIcon className="file-list-item-icon" icon={create} />
          <IonIcon className="file-list-item-icon" icon={trash} onClick={(_: MouseEvent) => deleteOne(file)}/>
        </IonCol>
      </IonItem>
    )
  }
}

function deleteFile(file: FileModel): void {
  //  RemoteStorageHelper.deleteOne()
}

//! Put it into a formater helper so it can be called
function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default FileListItem;