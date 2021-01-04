import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonMenuToggle
} from '@ionic/react';

import { exit } from 'ionicons/icons';
import { AuthHelper } from '../helpers';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';
import './Menu.css';

function logout(history: any): void {
  AuthHelper.logout().then(() => {
    console.log(history)
    history.push('/')
  })
}

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages, history }) => (
  <IonMenu contentId="main" className="main-panel-menu">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonMenuToggle autoHide={false}>
        <IonList>
          {appPages.map((appPage, index) => {
            return (
              <IonItem routerLink={appPage.url} routerDirection="none" key={index}>
                <IonIcon slot="start" icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            );
          })}
          <IonItem key='logout' color="danger" button onClick={async () => await logout(history)} >
            <IonIcon slot="end" icon={exit} />
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonList>
      </IonMenuToggle>
    </IonContent>
  </IonMenu>

);

export default withRouter(Menu);
