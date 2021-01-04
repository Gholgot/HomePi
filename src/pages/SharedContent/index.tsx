import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import React from 'react';



const SharedContent: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Shared Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="recent-card">
          <IonCardHeader>
            <IonCardTitle>Files list ..... <b>WIP</b></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              No Content
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default SharedContent