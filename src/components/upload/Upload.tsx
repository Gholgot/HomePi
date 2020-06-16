import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import './Upload.css';

const Upload: React.FC = () => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton>
        <input id="file" hidden type="file" accept="image/*" onChange={e => console.log("toto")} />
        <label htmlFor="file" className="upload-button-label">
          <IonIcon icon={add} slot="start" />
        </label>
      </IonFabButton>
    </IonFab>
  )
}

export default Upload