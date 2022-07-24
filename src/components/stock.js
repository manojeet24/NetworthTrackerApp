import axios from "axios";
import React from "react";
import { saveAs } from "file-saver";

export default class StockPrice extends React.Component{

	componentDidMount(){
    	const script = document.createElement("script");
		script.src = "https://www.gateway-tt.in/assets/embed.js";
		script.async = true;

		document.body.appendChild(script)

		// axios.get(`http://localhost:8080/tickerlist`)
      	// .then(res => {
		// 	 console.log(res.data);
      	// })
		
	}
	  render(){
		const data = '<p style = "margin: auto;width: 32%;padding: 10px;" class="sc-embed" data-width="500px" data-orders="%5B%7B%22quantity%22%3A10%2C%22ticker%22%3A%22INFOBEAN%22%7D%5D" data-cardsize="big" data-withtt="false" data-withsearch="true" style="width:500px;min-height:300px;display:flex;align-items:center;justify-content:center"> <strong>loading widget to trade INFOBEAN</strong> </p> <script async src="https://www.gateway-tt.in/assets/embed.js"></script>';
		return(
			<div>
				 <a className="btn-ticker" href="http://localhost:8080/tickerlist">Get Ticker List</a>
				<div  dangerouslySetInnerHTML = {{__html: data}}>
				</div>		
			</div>
		)

	  }

}