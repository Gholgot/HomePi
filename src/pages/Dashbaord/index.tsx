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
import './Dashboard.css';

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="recent-card">
          <IonCardHeader>
            <IonCardTitle>Recent Files</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              No modifications withing the last 7 days
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
