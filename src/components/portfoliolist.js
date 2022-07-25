import React from "react";
import axios from "axios";

export default class Portoliolist extends React.Component{

    componentDidMount(){
    	axios.get(`https://valuetracker.herokuapp.com/portfoliolist`)
      	.then(res => {
			console.log(res.data);
				// this.setState({datapoints: res.data})
				// console.log(this.state.datapoints);
      	})
	}

    render(){
        return(
            <div>
                Portfolio
            </div>
        )
    }
}