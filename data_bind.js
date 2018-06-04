import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';


export default class DataBind extends Component {
    constructor(){
        super()
        this.state= {value:''};
        
    }
    
    onClickHandler = (e) => {
        
    	this.setState({value:e.target.value});
        
    }    
    render() {

    return ( 
    <div>             
        <label htmlFor = "candidateName" > Candidate Name< /label> 
        <input type = "text" className = "form-control" value={this.state.value} id = "candidateName" placeholder = "Your Name" onChange={this.onClickHandler}/> 
        <p>Input Text:{this.state.value}</p>    

    </div>
           );
    }
}
