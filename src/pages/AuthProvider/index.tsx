import React from 'react';
import { IonApp, IonContent, IonGrid, IonRow, IonCol, IonInput, IonLabel, IonButton, IonRippleEffect, IonIcon, IonItem, IonCard } from '@ionic/react';

import { mail, lock } from 'ionicons/icons';

import { AuthHelper } from '../../helpers';
import './AuthProvider.css';

const AuthProvider: React.FC = () => (
  <IonApp className="authprovider">
    <IonContent fullscreen={true} className="authprovider">
      <IonGrid>
        <IonRow className="authprovider-row">
          <IonCol sizeSm="7" sizeLg="5" sizeXl="4" offsetMd="4" text-suppressContentEditableWarning>
            <div>
              <IonCard className="authprovider-container">
                <IonItem className="form-items">
                  <IonInput placeholder="Mail" pattern="email" required={true} type="email" autocomplete="on" autofocus={true} clear-input={true} />
                  <IonIcon icon={mail} color="black" slot="start"></IonIcon>
                </IonItem>
                <IonItem className="form-items">
                  <IonInput placeholder="Password" pattern="password" required={true} type="password"></IonInput>
                  <IonIcon icon={lock} color="black" slot="start"></IonIcon>
                </IonItem>
                <IonButton color="primary" size="default" expand="full">
                  Login
            <IonRippleEffect></IonRippleEffect>
                </IonButton>
              </IonCard>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>
)

export default AuthProvider