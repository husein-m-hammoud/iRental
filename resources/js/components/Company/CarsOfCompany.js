import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import Popup from "reactjs-popup";
import AddCar from "../cars/AddCar";


import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Inbox from '../firebase/Inbox';




 class CarsOfCompany extends Component {
  
    constructor(props) {
    
        super(props);
       
        this.state = {
         cars:[],
         isLoading: true,
         error: null,
         make:"all",
         available:"Available",
         name: '', 
         dis:'',        
         transmission: '',
         seats: '',  
         company_id:document.getElementById('name').value,
         price: '',
         images: '',
         user_id: {},
         map:true,
          avg:0,
          count:0,
          showinboxx:false,
        };
       
      this.fetchAllCars();
      // this.showinbox=this.showinbox.bind(this);
      
    }
    showinbox(){
      // if (!this.state.showinbox){
      //   this.setState({
      //     showinboxx:true
      //   })
      // }else {
      //   this.setState({
      //     showinboxx:false
      //   })
      // }
      const { showinboxx } = this.state;
		this.setState({
			showinboxx: !showinboxx,
		});
    }
    handleChange(event){
      console.log(event.target.name);
      this.setState({ [event.target.name]: event.target.value });
      console.log(this.state.image)
  }
  handleChangee(event){
    
    this.setState({transmission: event.target.value});
    
}
handleFiles(e){
  
let files=document.getElementById("car_img").files


 this.setState({
   images:files
 }


 )
}
  
  
  onAddBtn(event){
    event.preventDefault();
    let img =document.getElementById("car_img").files;
    //let ext =this.getFileExtension(img);
    let newimg=this.state.images;//+"."+ext;    
   
    let formData = new FormData();

      for (var i=0;i<img.length; i++){
      formData.append('file[]',document.getElementById("car_img").files[i] );

      }
  

    // formData.append('file', document.getElementById("car_img").files);   
    formData.append('name', this.state.name);
    formData.append('dis', this.state.dis);
    formData.append('transmission', this.state.transmission);  
    formData.append('seats', this.state.seats);  
    formData.append('company_id', this.state.company_id);  
    formData.append('price', this.state.price);  
    
        axios({
            method:"post",
            url:'/addcar',
            data:formData,
            config:{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    //'X-CSRF-TOKEN':$('meta[name="csrf-token"]'.attr('content'))
                }
            }
        })
       .then(response => {
                console.log(response);
                }).catch(errors => {
                    console.log(errors);
          });
    }
    
   componentDidMount(){
    this.fetchAllCars();
   }
   
    fetchAllCars(event){  
      
       const  id=document.getElementById("name").value;
      
      
      
      fetch('/carsofcompany/'+id+'/'+this.state.make+'/'+this.state.available)
        .then(response=>response.json())
        .then(res =>{
            this.setState({
              user_id:res.user_id,
              cars:res.cars,
              
              count:res.count,
              avg:res.avg.toFixed(2)
              
            });
        }
        ).then()
          // Catch any errors we hit and update the app
         .catch(error => this.setState({ error, isLoading: false }));
        
      }
      onClikeBtn(event){   
    
        this.setState({make:event},() => {
        this.fetchAllCars();});
      
        }
        onClikedrop(event){   
    
          this.setState({available:event},() => {
          this.fetchAllCars();});
        
          }


          enter_Car(event){
            window.location.reload() 
        }
         
    
    render() {
      const { isLoading, cars, error,count,avg } = this.state;
      
      //     <a className="button parallelogram" href="#">
      //     <span className="skew-fix">button</span>
      // </a><
      
  
     console.log(this.state.showinboxx,"lolo")
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
    <img className="img" src={"../../car_img/"+car.potos[0]['carimage']} />

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
                  
             
             
                
              </div>
              </div>
              <div className="time">
              {this.state.user_id==null || this.state.user_id==0
           
           
              ?
            <div>
              {car.available=='y'
          
               ? 
          //    <div className="row" style={{marginLeft:350,marginTop:200,position:"absolute",color:"green"}}>
          //    <strong style={{color:"#000"}}> Return time  : </strong>

               <p style={{color:"green"}}> Book Now</p> 
                 
             
           
             : <p style={{color:"red"}}>Can't Book Now</p> 
             
             
             }
          </div>
          :null
          }
              </div>
    
     </div>
     </Link>
                  
       </Router>
       </div>
      ))
      }  
        </div>
            <br></br>
            {this.state.user_id==null || this.state.user_id==0
           
           ?null
            :<div style={{textAlign:"center"}} >
            {/* <img  src="../car--plus.png" style={{height:50}}/> */}
            {/* <button className="button parallelogram" >ADD</button> */}
            <Popup trigger={<button className="button parallelogram">ADD</button>} modal
             closeOnDocumentClick >
              <AddCar
              
              name={this.state.name}
              transmission={this.state.transmission}
              seats={this.state.seats}
              company_id={this.state.company_id}
              price={this.state.price}
              dis={this.state.dis}
              image={this.state.image}
              onChangeValue={name => this.handleChange(name)}
              onChangeValuee={this.handleChangee.bind(this)}
              onChangeFile={this.handleFiles.bind(this)}
              onAddBtn = {this.onAddBtn.bind(this)}
              />
              
              </Popup>
            </div>
            
             }
             <div >
             <header className="top-header">

              <span className="menu-icon">
                <div className="row">
         
                 
                <button className='chatbox'  onClick={()=>this.showinbox()}>
                <img className="icon-img" src="../speak.png" />
                  Chat Box
                  </button>
                </div>
                
                {this.state.showinboxx
                ? <div ><Inbox/>
                </div>
                :<div></div>
                }
               
                </span>
              </header>
             </div>
             
             
        </div>
       
       
               
            );
        
     
       
    }
}

if (document.getElementById("carsofcompany")) {
    ReactDOM.render(<CarsOfCompany />, document.getElementById('carsofcompany'));
}


