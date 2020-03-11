import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Animated} from "react-animated-css";
import Map from "../Maps/Map"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

 
  
 class AddCompany extends Component {
    constructor(state) {
        super(state)
        this.state = {
            map:false,
            addform:true  ,
            name: '',
            user:'',
            phone: '',
            days: '',   

            close_time: '',
            logo:'',
            address:'',
        lat:'',
        lng:'',
        city:'',
        id:'',
           
          
        }
             this.handleChange=this.handleChange.bind(this); 
             this.onAddBtn=this.onAddBtn.bind(this); 
    }
    handleChange(event)
    {
        
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);
        console.log('event');
        console.log(this.state.name);
    }
    toggel(){
        event.preventDefault();
        document.getElementById('location').style.visibility = 'hidden',
        this.setState({
            
            // addform:false,
            map:true
        })
    }
    componentDidMount(){
        fetch('/getauth')
        .then(response=>response.json())
        .then(res =>{
            this.setState({
                
                name:res.name,
                id:res.id
              
            });
         
        }
        ).then(console.log(this.state.user))
          // Catch any errors we hit and update the app
         .catch(error => this.setState({ error, isLoading: false }));
        }
    
        callbackFunction = (MapData) => {
            console.log(MapData[2]),
                this.setState({
                  address: MapData[0],
                  lat: MapData[1].lat,
                  lng:MapData[1].lng,
                  city:MapData[2]
                
                })
          };
  
  onAddBtn(event){
    
    let img =document.getElementById("logo_img").value;
    //let ext =this.getFileExtension(img);
     
   
    let formData = new FormData();
    formData.append('file', document.getElementById("logo_img").files[0]); 
    formData.append('phone', this.state.phone);  
    formData.append('name', this.state.name);
      
  
    
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
        window.location.reload();
                }).catch(errors => {
                    console.log(errors);
          });
    }
    
    render() {
        return (
            <div className=" " style={{position:"relative",alignItems:'center'}} >
            {/* <input type="image" src="../../icon/addlocation.png"  id="location" style={{backgroundColor:'red',marginLeft:500,width:50}}   onClick={this.toggel.bind(this)}/> */}

            <form   encType='multipart/form-data' className=" "  style={{height:'100%' }}>
             <div className=" " style={{ backgroundColor: "" }}>
             <div >
             
            <br></br>
             <div className="form-group row">
                  <label  className="col-md-4 col-form-label text-md-right">Name</label>

                            <div className="col-md-6">
                                <input type="text"
                                 
                                 name="name" value={this.state.name}
                                 onChange={this.handleChange}
                                 className="form-controll "  required  />

                               
                            </div>
            </div>
            <div className="form-group row">
                  <label  className="col-md-4 col-form-label text-md-right">Phone Number</label>

                            <div className="col-md-6">
                                <input type="text"
                                
                                 name="phone" value={this.state.phone}
                                 onChange={this.handleChange}
                                 className="form-controll "  required  />

                               
                            </div>
            </div>
            <div className="form-group row">
                  <label  className="col-md-4 col-form-label text-md-right">Profile Picture
</label>

                            <div className="col-md-6">
                                <input type="file"
                                      id="logo_img"
                                
                                    name="logo" value={this.state.logo}
                                    onChange={this.handleChange}
                                    className="form-controll "  required 
                                    webkitdirectory mozdirectory msdirectory odirectory directory multiple />

                               
                            </div>
            </div>
                        
                        
 
            
                    
              
               
                
           
                              <br></br>
                             <div style={{textAlign:"center",position:"relative",marginLeft:96,height:450,width:472}} >
           
                                  
                                <Map
                                  google={this.props.google}
                                  center={{lat: 0, lng: 0}}

                                  height='300px'
                                  zoom={15}
                                  CarCallback = {this.callbackFunction}
                                  /> 
                                
                              </div>  
                           
 
             
 
             <div className="col-12" style={{textAlign:'center'}}>
                 <br></br>
                 <Router>
                    
                    <Link style={{color:"#ffff",textDecoration:'None'}}  to={'/profile/'+this.state.id}>
                 <button className="primary-btn text-uppercase parallelogram" onClick={this.onAddBtn}>Save</button>
                 
                    
                    </Link >
                    </Router>
                {/* <input type="rest" className="primary-btn text-uppercase parallelogram" value="Reset"   /> */}

             </div>
 
             </div>
         </div>
         </form> 

         </div>
        );
    }
}
// export default AddCompany;
if (document.getElementById('add_company')) {
    ReactDOM.render(<AddCompany />, document.getElementById('add_company'));
}
