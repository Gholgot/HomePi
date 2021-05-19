import React, { MouseEvent } from 'react';
import { trash, download, create, image } from 'ionicons/icons';
import { IonItem, IonIcon, isPlatform, IonCol } from '@ionic/react';
import MobileFileListItem from './mobileFileListItem';
import './File.css';
import FileModel from '../../models/File'
import { numberToComputerSize } from '../../helpers/format.helper';

interface FileProps {
  file: FileModel
  deleteOne: (file: FileModel) => void
}

const FileListItem: React.FC<FileProps> = ({ file, deleteOne }) => {
  if(isPlatform('mobile')) {
    return <MobileFileListItem file={file} deleteOne={deleteOne} />
  } else {
    return (
      <IonItem className="file-list-item">
        <IonCol size='1'>
          <IonIcon className="file-list-item-icon" icon={image} />
        </IonCol>
        <IonCol size='6 '>
          <p>{file.name}</p>
        </IonCol>
        <IonCol size='4'>
          <p>{numberToComputerSize(file.size)}</p>
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

export default FileListItem;