import React,{Component} from 'react'
// import axios from 'axios'

class DomainForm extends Component{
  constructor(props){
    super(props);
    this.initialState = {    
       DomainName: '',
       clear:''
  }
}

 
  handleChange=event=>{
   this.setState(
     {
     DomainName:event.target.value
    })
  }
 
  handleSubmit = event => {
    event.preventDefault();
    alert('Record saved successfully')

    // fetch('http://sg-srv-kas:2021/admin/api/v1/Domain', {
    //     method: 'POST',
    //     // We convert the React state to JSON and send it as the POST body
    //     body: JSON.stringify(this.state)
    //   }).then(function(response) {
    //     console.log(response)
    //     return response.json();
    //   });
  }
  clearForm = () => { 
    this.refs.clear.value="";
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Domain Name:
          <input type="text" name="DomainName" onChange={this.handleChange}/>
          </label>
          <button type="button" onClick={this.handleSubmit}>save</button>
          <button type="button" name="clear" onClick={this.clearForm}>clear</button>
        </form>
    )
  }
}



export default DomainForm
