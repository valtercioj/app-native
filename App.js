// App.js

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CharacterList from './components/Person';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1F1F1F' }}>
        <CharacterList />
      </SafeAreaView>
    </>
  );
};

export default App;
