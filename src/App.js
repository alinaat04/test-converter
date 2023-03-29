import React from 'react';
import Converter from './components/converter-component';
import Header from './components/Header';
import NewConverter from './components/new';

function App() {
  return (
    <React.Fragment>
      <Header />
      <NewConverter/>
    </React.Fragment>
  );
}

export default App;
