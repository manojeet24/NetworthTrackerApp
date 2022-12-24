import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, BarChart, Bar, CartesianGrid, Tooltip, Legend } from "recharts";
import {format, parseISO, subDays} from "date-fns";

export default class Portfolio extends React.Component{

	async getData() {
        const res = await axios('http://localhost:8080/networthlist');
		// console.log("Result: " + res.data)
        return await res.data;
    }

	constructor(props){
		super(props)
		this.state = {
			datapoints:[]
		}
	}

 
   	componentDidMount(){
    	if (this.state.datapoints.length === 0) {
			// console.log("Inside ComponentDidMount")
            this.getData().then(datapoints => this.setState({datapoints}))
                          .catch(err => { console.log("Error " + err)});
        }
	}

	  render(){
		const data = this.state.datapoints;
		console.log(data);
		var difference = 0.00
		var profit = 0
		const formatter = new Intl.NumberFormat('en-IN');
		const DataFormater = (number) => {
			if(number > 100000000){
			  return (number/100000000).toString() + 'Cr';
			}else if(number > 1000000){
			  return (number/100000).toString() + 'L';
			}else if(number > 100000){
			  return (number/100000).toString() + 'L';
			}else if(number > 10000){
			  return (number/10000).toString() + 'K';
			}else if(number > 1000){
			  return (number/1000).toString() + 'K';
			}else{
			  return number.toString();
			}
		}
		if(data.length>0){
			difference = parseFloat(data.at(-1).networth) - parseFloat(data.at(-2).networth);
			profit = data.at(-1).networth-data.at(-1).invested
			console.log("Day's Volatility:" + difference);
		}
		return(
			<div>
				{console.log(this.state.datapoints)}
				<h1 className="chart-heading">Portfolio Value</h1>
				<h2 className="text-center">Current Value: {data.length === 0 ? data : 
				formatter.format(data.at(-1).networth) + (difference<0 ? " ⮟ " + formatter.format(difference) : " ⮝ " + formatter.format(difference))}</h2>
				<h2 className="text-right"> {data.length === 0 ? data : "Profit: ₹ " +
				formatter.format(profit)}</h2> 
				<div>
					{this.state.datapoints.length > 0 && 
					<ResponsiveContainer width = "95%" height = {300} padding = {0} aspect={3}>
					<LineChart
						data={data}
						>
						<CartesianGrid strokeDasharray="5 1 2" vertical={false}/>
						<Tooltip cursor={{ stroke: "orange" , strokeWidth: 1 }}/>
						<XAxis dataKey= "date" tickLine={false} tickFormatter={str => {
							const date = parseISO(str);
							// console.log("Date" + date)
							if(date.getDate() !=null && date.getDate() % 1 === 0){
								return format(date, "MMM dd")
							}
							return ""
						}}
						/>
						<YAxis type="number" 
						dataKey={(data)=>parseInt(data.networth)}
						domain={['auto', 'dataMax+1000']}
						tickFormatter={(value) => DataFormater(value)}
						allowDataOverflow={true}/>
						{/* <YAxis type = "string" domain={['dataMin', 'dataMax + 100000000']} tickFormatter={(value) => DataFormater(value)} allowDataOverflow={true} tickLine={false}/> */}
						<Legend verticalAlign="bottom" height={36} iconType = "rect" />
						<Line dot={false} type="basis" dataKey="invested" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
						<Line dot={false}type="basis" dataKey="networth" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 8 }}  />
						</LineChart>
						</ResponsiveContainer>}
				</div>
			</div>
		)

	  }

}