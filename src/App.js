import React, { Component } from 'react';
import UserCreate from './components/UserCreate';
import ColorContext from './contexts/ColorContext';
import LanguageContext from './contexts/LanguageContext';

export default class App extends Component {
  state = {
    language: 'english'
  };
  onLanguageChange = language => {
    this.setState({ language: language });
  }
  render() {
    return (
      <div className='ui container'>
        <div>
          <h3>Select a Language:</h3>
          <i className='flag us' onClick={() => this.onLanguageChange('english')} />
          <i className='flag nl' onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}
