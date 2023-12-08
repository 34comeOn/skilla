import React from 'react';
import './App.scss';
import { AccountContainer } from './modules/accountContainer';
import { MainMenu } from './modules/mainMenu';

function App() {
  return (
    <div className='App'>
      <MainMenu />
      <AccountContainer />
    </div>
  );
}

export default App;
