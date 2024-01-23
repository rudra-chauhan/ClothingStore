// import React from 'react';
//import Route from './src/NAVIGATION/route';

// const App = props => {
//   return <Route />;
// };

// export default App;

import React, {useState} from 'react';
import Route from './src/NAVIGATION/route';
import {Provider} from 'react-redux';
import store from './src/SERVICES/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const persistStore = store();

const App = () => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
