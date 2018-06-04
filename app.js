import React, {Component} from 'react';
import DataBind from "./data_bind";
import List from "./dynamic_list";
//import movieList from "../../data/movieList";
import axios from 'axios';

export default class App extends Component {
  	constructor(){
		super();
		this.state = {movieList:{"mylist":[],"recommendations":[]}
					 };		
		this.addTitle = this.addTitle.bind(this);
		this.removeTitle = this.removeTitle.bind(this);
		
			}
	componentDidMount() {
    axios.get('/getData')
        .then(response => {
            this.setState({movieList: response.data})
        });
  	}
	
	
	
	addTitle = function(id,title,img){
		
		let addObj = { "title": title,
						"id": id,
						"img": img
					 };
		console.log("addTitle");
		console.log(addObj);
		
		
		axios.post('/addMovieRecord', addObj)
			 .then(function (response) {
						console.log(response.data);
						 this.setState({
            				movieList : response.data });
					  })
			 .catch(function (error) {
				console.log(error);
			  });
}

	removeTitle = function(id){
		
		console.log("removeTitle  " +id);
		
		let addObj2 = { "id": id };
		
		axios.post('/deleteMovieRecord', addObj2)
			 .then(function (response) {
						console.log(response.data);
						this.setState({
            				movieList : response.data });
					  })
			 .catch(function (error) {
				console.log(error);
			  });
		
}


	
    render() {
        return ( 
            <div>
			<List movieList={this.state.movieList} add={this.addTitle}  remove={this.removeTitle} />
            
			</div>
        );
    }
}
