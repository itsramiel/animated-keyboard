import React from 'react';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import Example from './components/Example';

const App = () => {
  return (
    <KeyboardProvider>
      <Example />
    </KeyboardProvider>
  );
};

export default App;
