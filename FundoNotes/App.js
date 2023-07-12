import {View, Text} from 'react-native';
import React from 'react';
import Index from './src/navigation/Index';
import {store} from './src/redux/Store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
