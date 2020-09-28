import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { UploadHelper } from '../../helpers';
import { add } from 'ionicons/icons';
import './Upload.css';

const Upload: React.FC = () => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton>
        <input id="file" hidden type="file" multiple={true} onChange={async (e) => {if (e.target.files) await UploadHelper.upload(e.target.files)}} />
        <label htmlFor="file" className="upload-button-label">
          <IonIcon icon={add} slot="start" />
        </label>
      </IonFabButton>
    </IonFab>
  )
}

export default Upload