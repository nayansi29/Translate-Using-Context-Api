import React, { Component } from 'react';
import LanguageSelector from './components/LanguageSelector';
import UserCreate from './components/UserCreate';
import ColorContext from './contexts/ColorContext';
import { LanguageStore } from './contexts/LanguageContext';

export default class App extends Component {

  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}
