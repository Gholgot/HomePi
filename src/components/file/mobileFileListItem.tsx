import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/react';
import React from 'react';
import { trash, download, create } from 'ionicons/icons';
import FileModel from '../../models/File';

interface FileProps {
  file: FileModel,
  deleteOne: (file: FileModel) => void
}

const MobileFileListItem: React.FC<FileProps> = ({ file, deleteOne}) => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonLabel>{file.name}</IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="primary" onClick={() => { }}>
          <IonIcon icon={download} />
        </IonItemOption>
        <IonItemOption color="tertiary" onClick={() => { }}>
        <IonIcon icon={create} />
        </IonItemOption>
        <IonItemOption color="danger" onClick={() => deleteOne(file)}>
        <IonIcon icon={trash} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )
}

export default MobileFileListItem