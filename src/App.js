import React from 'react';
import StockPrice from './components/stock';
import Portfolio from './components/portfolio';
import Button from './components/button';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1 className='text-center'>Networth Tracker</h1>
        </header>
        <StockPrice />
        <Portfolio />
      </div>
    )
  }
}