import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';               
export default List;

function List(props){
	
const myList = props.movieList.mylist.map((val) =>
    <div className="container-fluid" style={{float:'left'}} key ={val.id} >
      <div className="card" style={{width: '20rem'}}>
  		<img className="card-img-top" src={val.img} style={{width:'20rem'}} alt="Card image cap"/>
   			<div className="card-block">
			<h4 className="card-title">{val.title}</h4>
    		<p className="card-text"></p>
		<div>	
        <button className="btn btn-primary"  onClick={() => props.remove(val.id)} >Remove</button>
		</div>	
  		</div>
	</div>
   </div>      
  );
											  
const 	myRecoms = props.movieList.recommendations.map((val) =>
    <div className="container-fluid" style={{float:'left'}} key ={val.id} >
    
      <div className="card" style={{width: '20rem'}}>
  		<img className="card-img-top" src={val.img} style={{width:'20rem'}} alt="Card image cap" />
   			<div className="card-block">
			<h4 className="card-title">{val.title}</h4>
    		<p className="card-text"></p>
            <button className="btn btn-primary" onClick={() => props.add(val.id,val.title,val.img)}>Add</button>
  			</div>
	</div>
</div>
        
  );
	
											
											
											
  return (
	<div>
    	<div >    
    	<h1 style={{border:'1px solid black',textAlign:'center'}} >My List</h1>	
		{myList}
	 		
    	</div>
		
		  
		<div style={{clear:'left'}}>
		<h1 style={{border:'1px solid black'}} style={{border:'1px solid black',textAlign:'center'}}>My Recommendations</h1>	
		{myRecoms}
		</div>
			 
	</div>  
  );
}
