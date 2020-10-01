import React, { useEffect,useState } from 'react'
// import axios from 'axios'
import paginationFactory from 'react-bootstrap-table2-paginator';
// import * as ReactbootStrap from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'; 
import DomainForm from './DomainForm' 
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {AiFillEdit} from 'react-icons/ai'; 


function FetchTable(){
    const[domains,setDomains]=useState([])
    const [hasError, setErrors] = useState(false);
    const [ domainName, setActiveDomainName]= useState("")

    async function fetchData(){
        const res=await fetch('http://sg-srv-kas:2021/admin/api/v1/Domain/GetAll');
        res.json()
        .then(res=>setDomains(res))
        .catch(err=>setErrors(err));      
   
    }
    const editButton = (cell, row, rowIndex, formatExtraData) => {
      return (
        // <Button
        //   onClick={() => {
        //     this.onFollowChanged(row);
        //   }}    
        // >

        //   Follow
        // </Button>
        <div className="icons">
        <button className='btn-primary'onClick={()=>{
          console.log('name',row.DomainName)
          setActiveDomainName(row.DomainName)}}><AiFillEdit/></button></div>
      );
    };
  
    
    const columns=[
        {
            dataField:'DomainName',
            text:'DomainName',
            sort:true,
            filter: textFilter() 
        },
            {
            dataField:'Edit',
            text:'Edit',
            formatter:editButton

        }
    ];

   
    const options = {  
        page: 2,   
        sizePerPageList: [ {  
          text: '5', value: 5  
        }, {  
          text: '10', value: 10  
        }, {
           text: 'All',value:domains.length
        }
        ],   
        sizePerPage: 5,   
        pageStartIndex: 0,   
        paginationSize: 3,    
        prePage: 'Prev',   
        nextPage: 'Next',   
        firstPage: 'First',   
        lastPage: 'Last',   
        paginationPosition: 'bottom'    
      };  
      
        useEffect(() =>{
          fetchData();
},[]);
     

    return(    
        <div>
        <DomainForm name={domainName} changeName={setActiveDomainName}/> 
           <div><br></br></div>
        <div className="container">
        <div class="col-sm-12 btn btn-info">    
              Domain Names  
                         </div> 
                         
                         <div  style={{ marginTop: 5 }}>  
    
     {/* <table className="table">
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
                        <td><button className='btn-primary'onClick={()=>{
                            console.log('name',domain.DomainName)
                            setActiveDomainName(domain.DomainName)}}>Edit</button></td>
                        </tr>
                    ))}
                    </tbody>
                  
                       {/* pagination={ paginationFactory(options) } */}

                   
                {/* </table>  */}
                <BootstrapTable
                     striped  
                        hover 
                        keyField="name"
                        data={domains}
                        columns={columns}
                        pagination={paginationFactory(options)}
                        filter={ filterFactory() }                 
                        >
                     </BootstrapTable> 
                
        </div>
        </div>
        </div>
    )
}
export default FetchTable