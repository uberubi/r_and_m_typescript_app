import React, { useContext } from 'react';
import './App.css';
import {Store} from './Store'

const App = (): JSX.Element => {
  const store = useContext(Store)
  return (
    <>
    {console.log(store)}
      <h1>Rick and Morthy</h1>
      <p>Pick your favourite episode!!!</p>
    </>
  );
}

export default App;
