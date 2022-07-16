import axios from "axios";
import React from "react";

export default class StockPrice extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			company_name:"",
			stock:{
			}
		}
	}
	  handleChange = event => {
		this.setState({company_name:event.target.value })
	  }

	  handleSubmit = event => {
		event.preventDefault();

		axios.get(`http://localhost:8080/` + this.state.company_name).then(res => {
			console.log(res.data);
			this.state.stock = res.data;
			// this.setState({stock: res.data})
			console.log(this.state.stock.price);
      })
	  }

	  render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Company:
						<input type = "text" name = "name" placeholder="Search a Company" onChange={this.handleChange}/>
					</label>
					<div>
						<button type = "submit">Search</button>
					</div>
					<div>
						{this.state.stock.price}
					</div>
				</form>
				
			</div>
		)

	  }

}