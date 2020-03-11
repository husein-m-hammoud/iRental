import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';


import Popup from "reactjs-popup";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

 
  
 class AllCompany extends Component {
    constructor(state) {
        super(state)
        this.state = {
            companies:[],
           
           
        }
        this.fetchAllCompany=this.fetchAllCompany.bind(this);
        this.enter_company=this.enter_company.bind(this);
    }
    enter_company()
    {
        // <Link to={'/companyIndex/'+id}>About</Link>
       ///fetch('/companyIndex/'+id).then();
       
      
       window.location.reload()
      
       
    }
    
    componentDidMount(){
        this.fetchAllCompany()
       
    }

    
    fetchAllCompany(event){    
        fetch('/get_all_company')
        .then(response=>response.json())
        .then(res =>{
            this.setState({
                companies:res.companies,
                user:res.user
              
            });
         
        }
        ).then(console.log(this.state.user))
          // Catch any errors we hit and update the app
         .catch(error => this.setState({ error, isLoading: false }));
        }

        
    
    render() {
        
        const { isLoading, companies, error } = this.state;
        console.log(companies['car'])
        return (
        //     <a className="button parallelogram" href="#">
        //     <span className="skew-fix">button</span>
        // </a><
        <div>
           
           
           
            {companies.map((company)=>(
          <div onClick={this.enter_company.bind(this)}>
                <Router>
                    
            <Link style={{color:"#ffff",textDecoration:'None'}}  to={'/profile/'+company.id}>
            <div key={company.c_name} className="owner-module" style={{position:"relative"}} >
                <div className="roww owner-header ">
                    <div className="owner-img">
                        {/* <img src="../user2.png" style={{height:100,marginTop:15}}/> */}
                        <img src={"../car_img/"+company.logo}  style={{height:'130',width:140,marginLeft:0}} ></img>

                    </div>
                    <div className="owner-header-text">
                        <h1 style={{color:"#d4002a"}}>{company.c_name}</h1>
                        <p style={{fontSize:16 ,marginTop:10,marginBottom:1}}> {company.city}</p>
                        <p style={{fontSize:16,color:'#89959b'}}> {company.address}</p>
                        <div className="roww">
                                  
                                  <img src="../call.png" style={{height:14, marginRight:4}}/>
                                  <p className="p">{company.phone}
                                  </p>
                                </div> 
                    </div>
                    </div>
                    <br></br>
                    <div className="owner-text">
                        <div className="roww">
                            <div className="title">
                            <p className="p">Number of Cars:
                                        </p>
                                      
                            </div>
                            <div className="text">
                                <div>
                                <p className="p">{company.car.length} cars </p>
                               
                                </div>
                                  
                                       
                                        
                                     
                            </div>              
                        </div>
                        
                    </div>
                
            </div>
            </Link>
                       </Router>
           </div>
           ))}
            
             <br></br>

            
        </div>
        
        );
    }
}

if (document.getElementById('allcompany')) {
    ReactDOM.render(<AllCompany />, document.getElementById('allcompany'));
}
