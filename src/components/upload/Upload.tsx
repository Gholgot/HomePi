import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { RemoteStorageHelper } from '../../helpers/remote-storage.helper';
import { add } from 'ionicons/icons';
import './Upload.css';

interface UploadProps {
  onUploadComplete: () => void
}

const Upload: React.FC<UploadProps> = ({onUploadComplete}) => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton>
        <input id="file" hidden type="file" multiple={true} onChange={async (e) => {
          if (e.target.files) {
            await RemoteStorageHelper.upload(e.target.files)
            onUploadComplete()
          }
        }} />
        <label htmlFor="file" className="upload-button-label">
          <IonIcon icon={add} slot="start" />
        </label>
      </IonFabButton>
    </IonFab>
  )
}

export default Upload