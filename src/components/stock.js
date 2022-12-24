import React from "react";
import axios from "axios";
import man from "../images/man.jpg"
import { ResponsiveContainer, PieChart, Pie,LineChart, Line, XAxis, YAxis, BarChart, Bar, CartesianGrid, Tooltip } from "recharts";

export default class StockPrice extends React.Component{

	constructor(prop){
		super(prop)
		this.state = {
			datapoints:[]
		}
	}

	

	componentDidMount(){

    	const script = document.createElement("script");
		script.src = "https://www.gateway-tt.in/assets/embed.js";
		script.async = true;

		document.body.appendChild(script)

		axios.get(`http://localhost:8080/portfoliolist`)
      	.then(res => {
			console.log(res.data);
			this.setState({datapoints: res.data})
			// console.log(this.state.datapoints);
      	})
		
	}
	  render(){
		// const datapoints = this.state.datapoints;
		// if(datapoints.length>0){
		// 	console.log(datapoints);
		// }
		const data = '<div class="sc-embed" data-orders="%5B%7B%22quantity%22%3A10%2C%22ticker%22%3A%22INFOBEAN%22%7D%5D" data-cardsize="big" data-withtt="false" data-withsearch="true" style="width:500px;min-height:300px;display:flex;align-items:center;justify-content:center"> <strong>loading widget to trade INFOBEAN</strong> </div> <script async src="https://www.gateway-tt.in/assets/embed.js"></script>';
		return(
			<div>
				<a className="btn-ticker" href="https://valuetracker.herokuapp.com/tickerlist">Tickers</a>
				<div className="frontpage">
					<div  className = "frontpageImage" dangerouslySetInnerHTML = {{__html: data}}>
					</div>
					<div className="frontpageImage">
						<img src = {man} alt="Some Logo" widht = "250px" height="250px"/>
					</div>
					<div className="frontpageImage">
						<h2>Portfolio Holdings</h2>
						<table>
						<tbody>
							{
								this.state.datapoints.map(
									stock =>
									<tr key={stock._id}>
										<td>{stock.company_name}</td>
										<td>{stock.quantity}</td>
										<td>{stock.buy_price}</td>
									</tr>
								)
							}
						</tbody>
						</table>
					</div>
				</div>		
			</div>
		)

	  }

}