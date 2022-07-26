import React from 'react';
import StockPrice from './components/stock';
import Portfolio from './components/portfolio';

export default class App extends React.Component {

  constructor(props){
		super(props)
		this.state = {
			render:false
		}
	}

  componentDidMount(){
    setTimeout(function() { //Start the timer
			this.setState({render: true}) //After 1 second, set render to true
		}.bind(this), 2000)
  }
  
  render() {
    if(this.state.render){
      document.getElementById("loader").remove();
    }
    return (
      <div>
      {this.state.render===false?<div></div>:
      <div className="App">
        <header className='App-header'>
          <h1 className='text-center'>Portfolio Tracker</h1>
        </header>
        <StockPrice />
        {/* <Portoliolist /> */}
        <Portfolio />
      </div>}
    </div>
    )
  }
}