import axios from "axios";
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, BarChart, Bar, CartesianGrid, Tooltip } from "recharts";

export default class Portfolio extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			datapoints:[]
		}
	}

 
   	componentDidMount(){
    	axios.get(`https://valuetracker.herokuapp.com/networthlist`)
      	.then(res => {
			// console.log(res.data);
				this.setState({datapoints: res.data})
				// console.log(this.state.datapoints);
      	})
	}

	  render(){
		const data = this.state.datapoints;
		console.log(data);
		var difference = 0.00
		const formatter = new Intl.NumberFormat('en-IN');
		if(data.length>0){
			difference = parseFloat(data.at(-1).networth) - parseFloat(data.at(-2).networth);
			console.log(difference);
		}
		return(
			<div>
				{/* {console.log(this.state.datapoints)} */}
				<h1 className="chart-heading">Portfolio Value</h1>
				<h2 className="text-center">Current Value: {data.length === 0 ? data : 
				formatter.format(data.at(-1).networth) + (difference<0 ? " ⮟ " + formatter.format(difference) : " ⮝ " + formatter.format(difference))}</h2>
				<ResponsiveContainer width = "99%" aspect={3}>
					<BarChart data={this.state.datapoints}  width={50} height={300}
					margin={{ top:10,right: 250,left:50,bottom:10}}
					barSize = {40}
				>
						<CartesianGrid strokeDasharray="3 3" />
						<Tooltip />
						<XAxis dataKey="date" interval={'preserveStartEnd'}/>
						<YAxis tickFormatter={(value) => formatter.format(value)}/>
						<Bar dataKey="invested" fill="#8884d8" background={{ fill: '#eee' }}/>
						<Bar dataKey="networth" fill= "lightgreen" width={5} background={{ fill: '#eee' }}/>
					</BarChart>
				</ResponsiveContainer>
				{/* <table className="table table-stripped">
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
									<td>{day.networth}</td>
								</tr>
							)
						}
					</tbody>
				</table> */}
			</div>
		)

	  }

}