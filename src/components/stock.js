import axios from "axios";
import React from "react";

export default class StockPrice extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			company_name:"",
			stock:{
			}
			// isLoaded: false,
			// isValid: false
		}
	}
	  handleChange = event => {
		this.setState({company_name:event.target.value })
	  }

	  handleSubmit = event => {
		event.preventDefault();

		axios.get(`http://localhost:8080/` + this.state.company_name).then(res => {
			console.log(res.data);
			this.setState({stock: res.data})
			// this.setState({isLoaded: true})
			console.log(this.state.stock.price);
			
      })
	  }

	//   componentDidMount(){
	// 	if(this.state.isLoaded){
	// 		if(this.state.stock.price !== "###"){
	// 			this.setState({isValid: true})
	// 		}
	// 	}
	//   }

	  

	  render(){

		const stock = this.state.stock;
		const price = stock.price;
		const volume = stock.volume;


		return(
			<div>
				<form className= "text-center" onSubmit={this.handleSubmit}>
					<label>
						Company:
						<input type = "text" name = "name" placeholder="Search a Company" onChange={this.handleChange}/>
					</label>
					<div>
						<button type = "submit">Search</button>
					</div>
					<div>
						{ Object.keys(stock).length === 0? "" : price === "###" ? "Check Company Name" : "CMP: " + price + " and Volume Traded: " + volume}
					</div>
				</form>
				
			</div>
		)

	  }

}