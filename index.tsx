import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppStack from './src/navigation';
import React, {useEffect} from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/apollo/mutations';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppStack />
    </ApolloProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
