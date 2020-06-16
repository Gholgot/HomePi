import React from 'react';
import './Files.css';
import { IonPage, IonToolbar, IonHeader, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';


const FilesComponent: React.FC = () => {
  return (<IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Files</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard className="recent-card">
        <IonCardHeader>
          <IonCardTitle>Store: </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>
            No content yet
        </p>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>)
}

export default FilesComponent