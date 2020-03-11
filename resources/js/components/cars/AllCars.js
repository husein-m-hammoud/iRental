import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
 class AllCar_test extends Component {
    constructor(props) {
        super(props);
        this.state = {
         cars:[],
         isLoading: true,
         error: null,
         make:"all",
         available:"Available",
         company:[],
         count:'',
         avg:''
        };
       
      this.fetchAllCars();
     
    }

    onChangeValue(event){
        
    }
    
    // componentDidMount() {

        

    //     this.fetchAllCars();
    //   }

    fetchAllCars(event){    
        fetch('/get_all_car/'+this.state.make+'/'+this.state.available)
        .then(response=>response.json())
        .then(res =>{
            this.setState({
              cars:res.cars,
              company:res.cars.company,
              count:res.count,
              avg:res.avg.toFixed(2)
              
            });
        }
        ).then(console.log(this.state.cars))
          // Catch any errors we hit and update the app
         .catch(error => this.setState({ error, isLoading: false }));
      }
    onClikeBtn(event){   

    this.setState({make:event},() => {
    this.fetchAllCars();
        });
    
    }
    onClikedrop(event){   

        this.setState({available:event},() => {
        this.fetchAllCars();
         });
    
        }
    enter_Car(event){
        window.location.reload() 
    }


     
         
    
    render() {
        const { isLoading, cars, company,error ,count,avg} = this.state;
      
        //     <a className="button parallelogram" href="#">
        //     <span className="skew-fix">button</span>
        // </a><
        console.log("ok")
        console.log(company)
       
        return ( 
          
          <div>
              <div className="" style={{position:"absolute",marginLeft:500,marginTop:100, color:"#FFF",fontFamily:' AvenirNextLTW01-Regular,Arial,Helvetica,sans-serif'}}>
             
             <div className="row">
             <h1  style={{marginRight:7,color:'#FFFF'}}><div >{count} </div></h1> 
              <div> <h2 style={{marginRight:7,marginTop:5,color:'#FFFF'}}>VEHICLES LISTED BELOW</h2>  </div>
              </div>
              <div className="row">
              <div> <h2 style={{marginRight:7,marginTop:5,color:'#FFFF'}}>AVERAGE PRICE: USD</h2>  </div>

              <h1 style={{color:'#FFFF'}} ><div > {avg}  </div></h1> 
              </div>
              

          

        </div>

               <img style={{position:"",marginTop:-70}}  src="../icon/data-large" />
               <h1 style={{position:"absolute", color:"#FFF",fontFamily:' AvenirNextLTW01-Regular,Arial,Helvetica,sans-serif'}}>20 VEHICLES LISTED BELOW FROM USD133.87</h1>
          <div >
         
          <div className="btn-group" style={{textAlign: 'center',backgroundColor:"#000",height:70,width:'100%',marginTop:-70}} >
              <a className="primary-btn text-uppercase parallelogram button" href="#" onClick={ this.onClikeBtn.bind(this,'small')} style={{background:'#000',color:'#FFF',marginLeft:300}}>
                  Small Cars
              </a>
                             
              <a className="primary-btn text-uppercase parallelogram button" href="#" onClick={ this.onClikeBtn.bind(this,'large')} style={{background:'#000',color:'#FFF'}}>
                 Large Cars 
              </a>            
              <a className="primary-btn text-uppercase parallelogram button" href="#" onClick={ this.onClikeBtn.bind(this,'all')} style={{background:'#000',color:'#FFF'}}>
                 All Cars 
              </a>
              
              <MDBDropdown>
                      <MDBDropdownToggle caret color="#000" className="primary-btn text-uppercase button parallelogram"style={{background:'#000',color:'#FFF',height:70}}>
                      <div>{this.state.available}</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic>
                     
                      <MDBDropdownItem onClick={ this.onClikedrop.bind(this,'Available')}>
                      Available Only
                      </MDBDropdownItem>
                      <MDBDropdownItem onClick={ this.onClikedrop.bind(this,'All')}>All Cars</MDBDropdownItem>
                      </MDBDropdownMenu>
                  </MDBDropdown>
              </div>
            <br/> 
              
              </div>
              <br/> 
             <div className="row" style={{marginLeft:15}}>
            {cars.map((car) => (
                <div key={car.id} onClick={this.enter_Car.bind(this,car.id)}>
              <Router>
                    
              <Link   to={'car/'+car.id}>
           <div  className="car-module" style={{position:"relative"}} >
           <div className="car-header">
            <div  >
            <p className="name">{car.name}</p>
            {/* <p className="totalprice">{car.company['c_name']}</p> */}
            </div>
            <div className="price">USD {car.price}
            <p className="totalprice">Total Rental Per Day</p>
            </div>
            
           </div>
           <div className="car-image">
          <img className="img" src={"../../car_img/"+car.potos[0]['carimage']}/>

           </div>   
                     <div className="car-list">
                    <div className="row" style={{marginTop:10,marginLeft:"auto",marginRight:"auto"}}>
                    
                   
                        <div className="icon">
                        <div className="row">
                        <img className="icon-img" src="../icon/seat.png" />
                        <p className="icon-name"> {car.seats} seats</p>
                        </div>
                       
                         </div>
                  
                   
                        <div className="icon">
                        <div className="row">
                        <img className="icon-img" src="../icon/bags.png" />
                        <p className="icon-name">  {car.seats<5
                          ?3
                          :4
                          } Bags</p>
                        </div>
                        
                    </div>
                   
                   
                        <div className="icon">
                        <div className="row">
                        <img className="icon-img" src="../icon/doors.png" />
                        <p className="icon-name"> {car.seats<4
                          ?2
                          :4} Doors </p>
                        </div>
                    </div>
                    </div>
                    <div className="row" style={{marginTop:10,marginLeft:"auto",marginRight:"auto"}}>
                    
                   
                        <div className="icon">
                        <div className="row">
                        <img className="icon-img" src="../icon/Tr.png" />
                        <p className="icon-name">{car.transmission}</p>
                        </div>
                       
                         </div>
                  
                   
                        <div className="icon">
                        <div className="row">
                        <img className="icon-img" src="../icon/pump.png" />
                        <p className="icon-name"> Petrol</p>
                        </div>
                        </div>

                        <Route>
                            <Link to={'profile/2'}> 
                            <div className="icon">
                        <div className="row" >
                        <img className="icon-img" src="../speak.png" />
                        <p className="icon-name"> </p>
                        </div>
                        
                         </div>
                            </Link>
                        </Route>
                        
                   
                   
                      
                    </div>
                    </div>
                    <div className="time">
                        
                    {car.available=='y'
                
                   ? 
                //    <div className="row" style={{marginLeft:350,marginTop:200,position:"absolute",color:"green"}}>
                //    <strong style={{color:"#000"}}> Return time  : </strong>
   
                     <p style={{color:"green"}}> Book Now</p> 
                       
                   
                 
                   :   <p style={{color:"red"}}>Can't Book Now</p> 
                   
                   
                }
                    </div>
          
           </div>
           </Link>
                        
             </Router>
             </div>
            ))
            }  
        </div>
       
        </div>
               
            );
        
     
       
    }
}
//export default AllCar;
if (document.getElementById('allcar')) {
    ReactDOM.render(<AllCar_test />, document.getElementById('allcar'));
}
