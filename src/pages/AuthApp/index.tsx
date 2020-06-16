import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from '../../declarations';

import Menu from '../../components/Menu';
import Dashboard from '../Dashbaord';
import { tv, cloudCircle } from 'ionicons/icons';
import FilesComponent from '../Files';
import Upload from '../../components/upload/Upload';

const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: tv
  },
  {
    title: 'Storage',
    url: '/storage',
    icon: cloudCircle
  }
];

const AuthApp: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/storage" component={FilesComponent} exact={true} />
          <Route path="/" render={() => <Redirect to="/dashboard" />} exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
      <Upload/>
    </IonReactRouter>
  </IonApp>
)

export default AuthApp;