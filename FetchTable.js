import React, { useEffect,useState } from 'react'
// import axios from 'axios'
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactbootStrap from 'react-bootstrap'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';  
function FetchTable(){
    const[domains,setDomains]=useState([])
    const [hasError, setErrors] = useState(false);
   

    async function fetchData(){
        const res=await fetch('http://sg-srv-kas:2021/admin/api/v1/Domain/GetAll');
        res.json()
        .then(res=>setDomains(res))
        .catch(err=>setErrors(err));      
   
    }
    const columns=[
        {
            dataField:'name',
            text:'DomainName',
            sort:true,
            filter: textFilter() 
        },
            {
            dataField:'Edit',
            text:'Edit'

        }
    ];
   
      
        useEffect(() =>{
          fetchData();
},[]);
     

    return(
    
        
        <div className="container">
    
     <table className="table">
                <thead>
                <tr>
                    <th>Domain Name</th>
                    <th>Edit</th>                
                </tr>
                </thead>
                <tbody>{

                
                    domains.map((domain)=>(
                        <tr key={domain.DomainId}>
                        <td>{domain.DomainName}</td>
                        <td><button className='btn-primary' >Edit</button></td>
                        </tr>
                    ))}
                    </tbody>
                   
                </table>
                <BootstrapTable
                        keyField="name"
                        data={domains}
                        columns={columns}
                        pagination={paginationfactory()}
                        filter={ filterFactory() }
                        />
        </div>
    )
}
export default FetchTable