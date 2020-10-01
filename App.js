import React ,{Component} from 'react'
import './App.css';
import FetchTable from './components/FetchTable'
// import 'bootstrap/dist/css/bootstrap.min.css';
import AppSearch from './components/AppSearch'




class App extends Component
{
 
 
  render()
  {
    return(
      <div className='App'>
        {/* <Table />
        <DomainForm/> */}
       
        
        <FetchTable/>
        {/* <AppSearch/> */}
        
      </div>
    )
  }
}
export default App