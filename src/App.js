import React from 'react';
import StockPrice from './components/stock';
import Portfolio from './components/portfolio';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1 className='text-center'>100x Club</h1>
        </header>
        <Portfolio />
        <StockPrice />
      </div>
    )
  }
}