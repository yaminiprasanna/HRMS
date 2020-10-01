import React,{Component} from 'react'
// import axios from 'axios'
import {MdClear} from 'react-icons/md'; 
import {AiOutlineSave} from 'react-icons/ai'; 

class DomainForm extends Component{
  constructor(props){
    super(props);
   
}

 
  handleChange=event=>{
   this.props.changeName(event.target.value);
  }
  
  handleSubmit = event => {
    event.preventDefault();
    alert(`Record saved successfully ${this.props.name}`)

    let inputData=JSON.stringify({DomainName:this.props.name});
    console.log(inputData);

    fetch('http://sg-srv-kas:2021/admin/api/v1/Domain/Create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          
        },
        // We convert the React state to JSON and send it as the POST body
        body:inputData
      }).then(function(response) {
        console.log(response.json());
        // return response.json();
      });
  }
  clearForm = () => { 
   this.props.changeName('');
    
  }

  render(){
    return(
      <div className='icons'>
        <label for="name" class='lbl'>Domain Name:<span class="required">* </span>
          
          <input type="text" name="DomainName"  value={this.props.name}  onChange={this.handleChange}/>
          </label>
          
          <button type="button" className="btn1"onClick={this.handleSubmit} ><AiOutlineSave/>save  </button>
          <button type="  button" name="clear" onClick={this.clearForm}><MdClear/>Clear</button>
          </div>
        
    )
  }
}



export default DomainForm
