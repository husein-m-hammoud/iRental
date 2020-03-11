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
            name: '',
            user:'',
            phone: '',
            open_time: '',   

            close_time: '',
            logo:'',
            address:'',
        lat:'',
        lng:'',
        city:'',
           
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
    handleChange(event)
    {
        console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }
    componentDidMount(){
        this.fetchAllCompany()
       
    }
    onAddBtn(event){
        
        let img =document.getElementById("logo_img").value;
        //let ext =this.getFileExtension(img);
        let newimg=this.state.logo;//+"."+ext;    
       
        let formData = new FormData();
        formData.append('file', document.getElementById("logo_img").files[0]);   
        formData.append('name', this.state.name);
        formData.append('phone', this.state.phone);  
        formData.append('open_time', this.state.open_time);  
        formData.append('close_time', this.state.close_time);  
        formData.append('address', this.state.address);
         formData.append('lat', this.state.lat);
         formData.append('lng', this.state.lng);
         formData.append('city', this.state.city);

        
        
            axios({
                method:"post",
                url:'/AddCompany',
                data:formData,
                config:{
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        // 'X-CSRF-TOKEN':$('meta[name="csrf-token"]'.attr('content'))
                    }
                }
            })
           .then(response => {
                    console.log(response);
                    }).catch(errors => {
                        console.log(errors);
              });
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

        callbackFunction = (MapData) => {
            console.log('of'),
            console.log(MapData),
            console.log(this.state.name),
            console.log('on'),
                this.setState({
                  address: MapData[0],
                  lat: MapData[1].lat,
                  lng:MapData[1].lng,
                  city:MapData[2],
                
                })
          };
    
    render() {
        
        const { isLoading, companies, error } = this.state;
        return (
        //     <a className="button parallelogram" href="#">
        //     <span className="skew-fix">button</span>
        // </a><
        <div>
           
           
           
            {companies.map((company)=>(
          <div onClick={this.enter_company.bind(this)}>
                <Router>
                    
            <Link style={{color:"#ffff",textDecoration:'None'}}  to={'/companyIndex/'+company.id}>
            <div key={company.id} className="owner-module" style={{position:"relative"}} >
                <div className="roww owner-header ">
                    <div className="owner-img">
                        {/* <img src="../user2.png" style={{height:100,marginTop:15}}/> */}
                        <img src={"../car_img/"+company.logo}  style={{height:'100',marginTop:15}} ></img>

                    </div>
                    <div className="owner-header-text">
                        <h1 style={{color:"#d4002a"}}>{company.c_name}</h1>
                        <p style={{fontSize:16 ,marginTop:10,marginBottom:1}}> {company.city}</p>
                        <p style={{fontSize:16,color:'#89959b'}}> {company.address}</p>
                    </div>
                    </div>
                    <br></br>
                    <div className="owner-text">
                        <div className="roww">
                            <div className="title">
                            <p className="p">Number of vehicles:
                                        </p>
                                        <p className="p">available:  
                                        </p>
                                        <p className="p">
                                        </p>
                            </div>
                            <div className="text">
                                <div>
                                <p className="p">4 cars </p>
                               
                                </div>
                                  <div className="roww">
                                  
                                        <img src="../calendar2.png" style={{height:14, marginRight:4}}/>
                                        <p className="p">mon-thu
                                        </p>
                                      </div>     
                                       
                                        
                                      <div className="roww">
                                  
                                  <img src="../call.png" style={{height:14, marginRight:4}}/>
                                  <p className="p">{company.phone}
                                  </p>
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

// if (document.getElementById('allcompanyt')) {
//     ReactDOM.render(<AllCompany />, document.getElementById('allcompanyt'));
// }
