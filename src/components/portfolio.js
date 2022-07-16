import axios from "axios";
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, BarChart, Bar } from "recharts";

export default class Portfolio extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			datapoints:[]
		}
	}
 
   	componentDidMount(){
    	axios.get(`http://localhost:8080/trackportfolio`)
      	.then(res => {
			console.log(res.data);
				this.setState({datapoints: res.data})
      	})
	}

	  render(){
		return(
			<div>
				<h1 className="chart-heading">Portfolio Data</h1>
				<ResponsiveContainer width = "100%" aspect={3}>
					<BarChart data={this.state.datapoints} width={500} height={300} margin={{ top:10,right: 300,left:50,bottom:10}}>
						<XAxis dataKey="date" interval={'preserveStartEnd'}/>
						<YAxis />
						<Bar dataKey="netWorth" fill= "green" />
					</BarChart>
				</ResponsiveContainer>
				<table className="table table-stripped">
					<thead>
						<tr>
							<td>Date</td>
							<td>Networth</td>
						</tr>
					</thead>
					<tbody>
						{
							this.state.datapoints.map(
								day =>
								<tr key={day.date}>
									<td>{day.date}</td>
									<td>{day.netWorth}</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		)

	  }

}