import React, { useEffect, useState } from 'react';
import { StorageHelper } from './helpers';

import AuthApp from './pages/AuthApp';
import AuthProvider from './pages/AuthProvider';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [token, setToken] = useState();

  useEffect(()=> {
    StorageHelper.getToken().then((result: any) => {
        setToken(result.value)
      }
    )
  })

  if (token !== '' && token !== undefined) {
    return <AuthApp />
  }
  return <AuthProvider />
};

export default App;
