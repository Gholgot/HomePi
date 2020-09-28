import React, { useState } from 'react';
import { IonApp, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonRippleEffect, IonIcon, IonItem, IonCard } from '@ionic/react';

import { mail as mailIcon, lock as lockIcon } from 'ionicons/icons';

import { User } from '../../models/User';
import { AuthHelper } from '../../helpers';
import './AuthProvider.css';


const AuthProvider: React.FC<any> = () => {
  const [mail, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonApp className="authprovider">
      <IonContent fullscreen={true} className="authprovider">
        <IonGrid>
          <IonRow className="authprovider-row">
            <IonCol sizeSm="7" sizeLg="5" sizeXl="4" offsetMd="4" text-suppressContentEditableWarning>
              <div>
                <IonCard className="authprovider-container">
                  <form>
                    <IonItem className="form-items">
                      <IonInput placeholder="Mail" pattern="email" required={true} type="email" autocomplete="on" autofocus={true} clear-input={true} value={mail} onIonChange={e => setEmail(e.detail.value!)} />
                      <IonIcon icon={mailIcon} color="black" slot="start"></IonIcon>
                    </IonItem>
                    <IonItem className="form-items">
                      <IonInput placeholder="Password" pattern="password" required={true} type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                      <IonIcon icon={lockIcon} color="black" slot="start"></IonIcon>
                    </IonItem>
                  </form>
                  <IonButton color="primary" size="default" expand="full" onClick={async () => AuthHelper.authentificate(new User(mail, password))}>
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
}

export default AuthProvider