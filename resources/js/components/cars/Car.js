import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DateRangeExample from "./Calendar";
import {Animated} from "react-animated-css";
import Map from "../Maps/Map";
import AirportMap from "../Maps/airportmap";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import App_card from "../Visa/index";
import { Steps, Icon, message } from 'antd';
import Popup from "reactjs-popup";
import 'antd/dist/antd.css';
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from 'react-slideshow-image';


import "./style.css";

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`,backgroundSize:'auto'}}>
          
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    )
}

const moment = extendMoment(originalMoment);
const { Step } = Steps;

const steps = [
  {
    title: 'Step1',
    content: 'First-content',
  
 
  },
  {
    title: 'Step2',
    content: 'Second-content',
  

  },
  {
    title: 'Step3',
    content: 'Last-content',
  
  },
  {
    title: 'Step4',
    content: 'Last-content',
    
  },
  
];


 
  
 class Car extends Component {
    constructor(props) {
        super(props)
        const today = moment();
        this.state = {
        make:"all",
        car:[],  
        isOpen: false,
        showcheck :false,
        days:'1',
        slide_1:true,
        slide_2:false,
        slide_3:false,
        slide_4:false,
        slide_5:false,
        current: 0,
        name:'',
        email:'',
        phone:'',
        ShowMap:false,
        message: "",
        address:'',
        lat:'',
        lng:'',
        city:'',
        potos:[],
          user:[],
      
        slideImages:[],
        
        mymap:false,
        airportmap:false,
        carownermap:false,
      value: moment.range(today.clone().subtract(1, "days"), today.clone())  
        }
      this.get_car=this.get_car.bind(this);
      this.slidesshow=this.slidesshow.bind(this);
      this.submit=this.submit.bind(this);
        this.imagesdata=this.imagesdata.bind(this);
       
    }
    Slideshow () {
     console.log(this.state.user.email)
     this.setState({
       email:this.state.user.email,
       name:this.state.user.name
     })
      
  }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
        this.slidesshow()
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
        this.slidesshowBack()
      }

     onSelect(value, states) {
        this.setState({ value, states });
        this.onToggle();
      };
      onToggle () {
        this.setState({ isOpen: !this.state.isOpen });
        this.daysLeft();
      };
      

      renderSelectionValue(){
        return (
        <div className="form-group row">
        <div className="col-md-6 wrap-left">
                <div className="input-group dates-wrap">                                          
                        <input id="datepicker" className="dates form-control" id="exampleAmount" value= {this.state.value.start.format("YYYY-MM-DD")} placeholder="Date & time" type="text" onChange={this.handleChange} />                        
                        <div className="input-group-prepend"  onClick={this.onToggle.bind(this)}>
                            <span  className="input-group-text"><img src="../../calendar.png" style={{height:20}}></img></span>
                        </div>                                                         

        </div>
        </div>
        <div className="col-md-6 wrap-right">
            <div className="input-group dates-wrap">                                              
                <input id="datepicker2" className="dates form-control" value={this.state.value.end.format("YYYY-MM-DD")} id="exampleAmount" placeholder="Date & time" type="text" onChange={this.handleChange} />                        
                <div className="input-group-prepend" onClick={this.onToggle.bind(this)}>
                    <span  className="input-group-text"><img src="../../calendar.png" style={{height:20}}></img></span>
                </div>                      
            </div>
            </div>
        </div>
        
     
        );
      };

    slidesshow(){
        
        if (this.state.slide_1==true)
        {
           
            
            this.setState({
                slide_1: false
            }, this.setState({slide_2:true})
            );
        }else   if (this.state.slide_2==true)
        {
           
            
            this.setState({
                slide_2: false
            }, this.setState({slide_3:true})
            );
          }
          else   if (this.state.slide_3==true)
        {
           
            
            this.setState({
                slide_3: false
            }, this.setState({slide_4:true})
            );
          }else   if (this.state.slide_4==true)
          {
             
              
              this.setState({
                  slide_4: false
              }, this.setState({slide_5:true})
              );
            }
    }
    slidesshowBack(){
       
      if (this.state.slide_5==true)
      {
         
          
          this.setState({
              slide_5: false
          }, this.setState({slide_4:true})
          );
      }
      else if (this.state.slide_4==true)
      {
         
          
          this.setState({
              slide_4: false
          }, this.setState({slide_3:true})
          );
      }else   if (this.state.slide_3==true)
      {
         
          
          this.setState({
              slide_3: false
          }, this.setState({slide_2:true})
          );
        }
        else   if (this.state.slide_2==true)
      {
         
          
          this.setState({
              slide_2: false
          }, this.setState({slide_1:true})
          );
        }
  }

  handleChange(event)
  {
      console.log(event.target.name);
      this.setState({ [event.target.name]: event.target.value });
  }
    componentDidMount(){
       this.get_car() 
    }
    get_car(){
        var id=document.getElementById("car_id").value;
        
        fetch('/get_car/'+id)
        .then(response=>response.json())
        .then(res =>{
            this.setState({
              car:res.car,
              potos:res.potos,
              user:res.user
              
            },
            ()=>this.Slideshow()
            );
        }
        ).then(console.log(this.state.cars))
          // Catch any errors we hit and update the app
         .catch(error => this.setState({ error, isLoading: false }));
    }
    submit(){
      const current = this.state.current + 1;
      
      var id=document.getElementById("car_id").value;
      message.success('Order Successful!');
      let formData = new FormData();
        formData.append('id', id); 
        formData.append('name', this.state.name);
        formData.append('email', this.state.email); 
        formData.append('phone', this.state.phone);

         formData.append('car_left', this.state.value.start.format("YYYY-MM-DD"));  
         formData.append('return_time', this.state.value.end.format("YYYY-MM-DD"));  
         formData.append('address', this.state.address);
         formData.append('lat', this.state.lat);
         formData.append('lng', this.state.lng);
         formData.append('city', this.state.city);
        
            axios({
                method:"post",
                url:'/adduser',
                data:formData,
                config:{
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        //'X-CSRF-TOKEN':$('meta[name="csrf-token"]'.attr('content'))
                    }
                }
            })
           .then(response => {
                    this.setState({
                      slide_4:false,
                      current:current,
                      slide_5:true})
                    }).catch(errors => {
                        console.log(errors);
              });
  }
    showmap(event){
      console.log(event)
      if (event=="mymap"){
      this.setState({
        mymap:true,
        carownermap:false,
        airportmap:false
      },()=>this.next());
    }
    else if (event=="airportmap"){
      this.setState({
        mymap:false,
        carownermap:false,
        airportmap:true
      },()=>this.next());
    }
    else if (event=="carownermap"){
      this.setState({
        mymap:false,
        airportmap:false,
        carownermap:true
      },()=>this.next());
    }


  }
  
    
    onClikeBtn(event){   
    
        this.setState({make:event});
        //console.log(this.state.make)
      
        }
      daysLeft() {
          // let {startDate, endDate} = this.state;
          
          // console.log(endDate);
          // let amount = endDate.diff(startDate, 'days');
        let amount = this.state.value.end.diff(this.state.value.start, 'days');
        // console.log(amount)
          this.setState({
            days: amount
          });
        }
      onNextStep = () => {
        if (!this.state.isValid) {
          this.setState({ errors: true });
        } else {
          this.setState({ errors: false });
        }
        };
    callbackFunction = (MapData) => {
      console.log(MapData[2]),
          this.setState({
            address: MapData[0],
            lat: MapData[1].lat,
            lng:MapData[1].lng,
            city:MapData[2]
          
          })
    };
    slidepotos(e){
      // if(e){
    
      //   this.setState({
      //     potos:[this.state.car[0]['potos']]
      //   },()=>this.imagesdata());
      // }else{
      //   this.setState({
      //     potos:['e.potos']
      //   },(()=>this.imagesdata()));
      // }
      // console.log(this.state.potos['carimage'])
     
    }
    imagesdata(){
      this.setState({
      slideImages : [
        'images/slide_2.jpg',
        'images/slide_3.jpg',
        'images/slide_4.jpg'
      ]
    })
      
    }
     
    
  
    render() {
        console.log(this.state.value.price)
        const { current } = this.state;
        console.log(this.state.potos)
          let url='url'
        let formData = [
          {...this.state.potos.map((potos)=>
             '../../car_img/'+potos['1'],
          )
          }
        ];
          console.log('jdjdj')
        console.log(formData[0][1],'jdjdj')
        const con=[formData[0][0],formData[0][1],formData[0][2]]
       
        
        console.log(con)
        return (
        
        <div>
            <section className="banner-area relative" id="home" >
        <div className="overlay overlay-bg"></div>  
                
                
        <div className="container">
          <div className="row fullscreen  align-items-center justify-content-center">
                        
               <div className="col-lg-5  col-md-4 banner-content  header-right" style={{marginRight:70,marginLeft:-100,height:'750px',marginTop:0}}>
               {this.state.car.map((car)=>(
               
               <div  key={car.id}>
                 <div  style={{marginTop:20}}>
               <h2 style={{color: 'rgb(220, 45, 19)'}}>{car.name}</h2>
              
            <div style={{marginTop:40}} >
            {/* <img  src="../car--plus.png" style={{height:50}}/> */}
            {/* <button className="button parallelogram" >ADD</button> */}
            <Popup   modal trigger={
              <a >
                  <img src={ formData[0][0]} style={{width:400}}/>
              </a>
            
         
            
          } 
                >
             {/* <SimpleImageSlider
                    width={1100}
                    height={600}
                    backgroundPositionSize={500,600}
                    position={'relative'}
                    style={{ backgroundColor:'#3e3e3e', backgroundSize: 'auto' ,backgroundRepeat:"no-repeat"}}
                   
                    images={con}
                     
                      
                    /> */}
                       <Slide {...properties} height={500}>
          <div className="each-slide">
      
            <div style={{'backgroundImage': `url(${formData[0][0]})`}}>
         
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${formData[0][1]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${formData[0][2]})`}}>
             
            </div>
          </div>
        </Slide>
              
              </Popup>
            </div>
            
             


                
               
            </div>
             <div>
                      <table style={{border:'1px solid #FFF'}}>
                        <tr>
                          <td><strong style={{marginRight:60}}>seats :</strong>  {car.seats}</td>
                          
                          <td><strong style={{marginRight:8}} >Bags:</strong > 
                          {car.seats<5
                          ?3
                          :4
                          }
                           </td>


                        </tr>
                        <tr>
                          <td><strong >transmission :</strong > {car.transmission}</td>
                         
                          <td><strong style={{marginRight:5}}>Doors:</strong>
                          {car.seats<4
                          ?2
                          :4
                          
                          }
                          </td>
                          
                        </tr>
                      </table>
             </div>
             <div className="dis">
             The Mercedes C63 AMG is a luxury car
First and foremost, this model is made for the comfort and enjoyment of its driver and passengers. It is every inch a luxury car that offers sporty good looks as well as high-quality materials and special features on the interior.
             </div>
             </div>
               ))}
            </div>
            
                        <br></br>
                        <br></br>
                        <div className="col-lg-6  col-md-7 header-right" style={{height:750}}>

                        <div style={{marginTop:" 30px"}}>
                            <Steps current={current}>
                                {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                               
                                ))}
                               
                            </Steps>
                            
                        </div>               
                        {this.state.slide_1?
                            <Animated id="1" animationIn="flipInY" animationOut="flipOutY" animationInDuration={400} animationOutDuration={400} isVisible={this.state.slide_1}>
                              
                                    
                                
                            <div className="row" style={{marginTop:" 20px"}}> 
                            <h4 className="text-white pb-30" >Rent Your Car Today!</h4>
                            <h3 className=" " style={{color:'#DC2d13',marginLeft:100}}>
                              {this.state.car.map((car)=>(
                                <div key={car.id}>
                                    {(this.state.days)*(car.price)}$ 
                                    for {this.state.days} Days
                                </div>
                                       
                                  ))}
                              </h3>

                            </div>
              <form className="form" role="form" >
                  
                  <div className="form-group row">
                      <div style={{height:60}}></div>
                      <h2 style={{color:'#FFF'}}>Information</h2>
                  </div>
                       <div>{this.renderSelectionValue()}</div>

                                                   
                            <div style={{backgroundColor:"white",marginLeft:'100',marginRight:'40'}}>
                            {this.state.isOpen && (
                            <DateRangePicker
                                value={this.state.value}
                                onSelect={this.onSelect.bind(this)}
                                singleDateRange={true}
                                
                            />
                            )}
                              </div>   
                                    
                                    
                                    
                  <div className="from-group">
                    <input className="form-control txt-field" value={this.state.name} type="text" name="name" onChange={this.handleChange.bind(this)} placeholder="Your name" />
                    <input className="form-control txt-field" value={this.state.email}  type="email" name="email" onChange={this.handleChange.bind(this)} placeholder="Email address" />
                    
                    <input className="form-control txt-field"  value={this.state.phone} type="tel" name="phone" onChange={this.handleChange.bind(this)} placeholder="Phone number" />
                                   
                                                                   
                    </div>
                                
                               
                
              </form>
                           
                            
                            </Animated> 
                            :<div></div>
                            }
                           
                           {this.state.slide_2
                            ?
                            <Animated animationIn="flipInY" animationOut="flipOutY" animationInDuration={400} animationOutDuration={400} isVisible={this.state.slide_2}>
                               <h2 style={{color:'#FFF'}}>Payment Details</h2>
                            <div>
                                
                                 <App_card />  
                                                   
                                </div>  
                               
                                </Animated>
                                :null
                           }

                            {this.state.slide_3
                            ?
                            <Animated animationIn="flipInY" animationOut="flipOutY" animationInDuration={400} animationOutDuration={400} isVisible={this.state.slide_3}>
                              <br></br>
                              <h2 style={{color:'#FFF'}}>Pickup Location</h2>
                           <div className="from-group" style={{marginLeft:'100',marginRight:'auto'}}>
                           <div onClick={() => this.showmap('airportmap')}>
                               <div className="flip-card">
                                    <div className="flip-card-inner">
                                      <div className="flip-card-front">
                                        <img src="../../icon/airportlocation.png" style={{height:80}}/>
                                      </div>
                                      <div className="flip-card-back">
                                      <br></br>
                                        <h4 style={{color:'#FFFF'}}>Airport Address</h4> 
                                        <p></p> 
                                        
                                      </div>
                                    </div>
                                  </div>
                               
                               
                            </div>
                            
                            <div className="">

                            <div onClick={() => this.showmap('carownermap')}>
                               <div className="flip-card">
                                    <div className="flip-card-inner">
                                      <div className="flip-card-front">
                                      <img src="../../icon/companylocation1.png" style={{height:80}}/>
                                      </div>
                                      <div className="flip-card-back">
                                      <br></br>
                                      <h4 style={{color:'#FFFF'}}>Car Owner Address</h4> 

                                      </div>
                                    </div>
                                  </div>  
                                  </div>                            
                               
                            </div>
                            <div onClick={() => this.showmap('mymap')}>

                               <div className="flip-card">
                                <div className="flip-card-inner">
                                  <div className="flip-card-front">
                                    <div style={{marginTop:5}}>
                                   <svg height="60px" viewBox="0 0 402.77333 402.77333" width="60px" xmlns="http://www.w3.org/2000/svg"><path d="m129.707031 395.945312-122.878906-58.734374v-227.597657l122.878906 44.050781zm0 0" fill="#fff"/><path d="m129.707031 402.773438c-1.007812 0-2.015625-.21875-2.949219-.667969l-122.878906-58.734375c-2.367187-1.136719-3.878906-3.53125-3.878906-6.160156v-227.597657c0-2.21875 1.082031-4.300781 2.898438-5.582031 1.808593-1.273438 4.132812-1.582031 6.234374-.84375l122.878907 44.050781c2.714843.972657 4.519531 3.542969 4.519531 6.429688v242.277343c0 2.34375-1.199219 4.523438-3.1875 5.777344-1.105469.699219-2.371094 1.050782-3.636719 1.050782zm-116.054687-69.867188 109.226562 52.210938v-226.648438l-109.226562-39.15625zm0 0"/><path d="m382.292969 395.945312-129.707031-58.734374v-227.597657l129.707031 44.050781zm0 0" fill="#fff"/><path d="m382.292969 402.773438c-.957031 0-1.917969-.199219-2.8125-.605469l-129.707031-58.738281c-2.445313-1.105469-4.011719-3.539063-4.011719-6.21875v-227.597657c0-2.199219 1.058593-4.265625 2.851562-5.550781 1.792969-1.277344 4.101563-1.617188 6.167969-.910156l129.707031 44.050781c2.769531.9375 4.632813 3.539063 4.632813 6.460937v242.28125c0 2.320313-1.179688 4.480469-3.128906 5.738282-1.117188.722656-2.40625 1.089844-3.699219 1.089844zm-122.878907-69.964844 116.050782 52.550781v-226.804687l-116.050782-39.414063zm0 0"/><path d="m129.707031 395.945312 122.878907-58.734374v-227.597657l-122.878907 44.050781zm0 0" fill="#ddd"/><path d="m129.707031 402.773438c-1.265625 0-2.53125-.351563-3.640625-1.050782-1.988281-1.253906-3.1875-3.433594-3.1875-5.777344v-242.28125c0-2.882812 1.808594-5.453124 4.519532-6.429687l122.878906-44.050781c2.109375-.738282 4.421875-.429688 6.234375.84375 1.820312 1.28125 2.898437 3.363281 2.898437 5.582031v227.597656c0 2.628907-1.511718 5.027344-3.878906 6.160157l-122.878906 58.734374c-.933594.453126-1.9375.671876-2.945313.671876zm6.828125-244.304688v226.648438l109.226563-52.210938v-213.59375zm0 0"/><path d="m395.945312 105.941406c0 54.738282-99.113281 165.191406-99.113281 165.191406s-99.113281-110.453124-99.113281-165.191406c0-54.738281 44.371094-99.113281 99.113281-99.113281 54.742188 0 99.113281 44.375 99.113281 99.113281zm0 0" fill="#288eea"/><path d="m296.832031 277.960938c-1.9375 0-3.785156-.824219-5.078125-2.269532-4.121094-4.585937-100.867187-113.042968-100.867187-169.75 0-58.414062 47.527343-105.941406 105.945312-105.941406 58.414063 0 105.941407 47.527344 105.941407 105.941406 0 56.707032-96.742188 165.160156-100.859376 169.75-1.292968 1.445313-3.140624 2.269532-5.082031 2.269532zm0-264.308594c-50.890625 0-92.292969 41.402344-92.292969 92.289062 0 44.617188 72.269532 131.582032 92.292969 154.816406 20.019531-23.238281 92.289063-110.21875 92.289063-154.816406 0-50.886718-41.402344-92.289062-92.289063-92.289062zm0 0"/><path d="m344.554688 105.941406c0 26.355469-21.367188 47.722656-47.722657 47.722656s-47.722656-21.367187-47.722656-47.722656c0-26.355468 21.367187-47.722656 47.722656-47.722656s47.722657 21.367188 47.722657 47.722656zm0 0" fill="#fff"/><path d="m296.832031 160.488281c-30.078125 0-54.550781-24.46875-54.550781-54.546875s24.472656-54.546875 54.550781-54.546875c30.082031 0 54.546875 24.46875 54.546875 54.546875s-24.464844 54.546875-54.546875 54.546875zm0-95.441406c-22.550781 0-40.898437 18.347656-40.898437 40.894531 0 22.550782 18.347656 40.894532 40.898437 40.894532 22.546875 0 40.894531-18.34375 40.894531-40.894532 0-22.546875-18.347656-40.894531-40.894531-40.894531zm0 0"/><path d="m47.785156 177.492188-40.957031 4.097656v138.640625l34.132813-6.203125 47.785156-6.828125 6.828125-47.785157-20.480469-13.652343zm0 0" fill="#ddd"/><path d="m6.828125 327.058594c-1.589844 0-3.140625-.550782-4.375-1.585938-1.550781-1.296875-2.453125-3.214844-2.453125-5.238281v-138.644531c0-3.507813 2.660156-6.441406 6.148438-6.792969l40.957031-4.097656c3.074219-.292969 5.894531 1.445312 7.019531 4.257812l26.523438 66.300781 18.710937 12.476563c2.1875 1.457031 3.339844 4.042969 2.972656 6.648437l-6.824219 47.785157c-.433593 3.003906-2.792968 5.367187-5.796874 5.792969l-47.785157 6.824218-33.878906 6.167969c-.40625.070313-.8125.105469-1.21875.105469zm6.824219-139.292969v124.289063l26.085937-4.742188 42.976563-6.144531 5.492187-38.460938-16.898437-11.265625c-1.148438-.769531-2.039063-1.867187-2.554688-3.144531l-25.398437-63.5zm0 0"/><path d="m225.28125 286.71875-20.480469-13.652344-27.308593 34.132813-20.480469 34.132812 14.785156 34.496094 53.484375-27.667969zm0 0" fill="#777"/><path d="m171.800781 382.652344c-.78125 0-1.5625-.132813-2.308593-.398438-1.78125-.640625-3.21875-1.992187-3.964844-3.734375l-14.789063-34.496093c-.867187-2.015626-.707031-4.320313.421875-6.203126l20.480469-34.132812c.160156-.257812.332031-.511719.519531-.75l27.304688-34.132812c2.214844-2.757813 6.160156-3.386719 9.121094-1.417969l20.480468 13.65625c1.898438 1.265625 3.039063 3.394531 3.039063 5.679687v61.4375c0 2.554688-1.425781 4.890625-3.683594 6.066406l-53.480469 27.664063c-.980468.507813-2.0625.761719-3.140625.761719zm-7.140625-40.796875 10.519532 24.535156 43.273437-22.382813v-53.636718l-12.234375-8.152344-23.105469 28.886719zm0 0"/><path d="m129.707031 200.25 6.828125 4.550781 20.476563-20.480469 40.960937-13.652343-15.035156-36.085938-53.230469 19.082031zm0 0" fill="#777"/><path d="m136.535156 211.625c-1.316406 0-2.636718-.375-3.789062-1.144531l-6.828125-4.550781c-1.898438-1.265626-3.039063-3.394532-3.039063-5.679688v-46.585938c0-2.882812 1.808594-5.453124 4.519532-6.429687l53.234374-19.082031c3.414063-1.230469 7.207032.445312 8.605469 3.800781l15.035157 36.085937c.734374 1.753907.699218 3.726563-.085938 5.453126-.789062 1.726562-2.253906 3.050781-4.054688 3.652343l-39.433593 13.140625-19.339844 19.339844c-1.320313 1.324219-3.066406 2-4.824219 2zm0-53.15625v36.679688l15.652344-15.65625c.746094-.746094 1.660156-1.3125 2.664062-1.648438l33.996094-11.332031-9.714844-23.316407zm0 0"/><path d="m95.574219 177.492188 34.132812 22.757812v-46.585938l-50.976562-18.273437zm0 0" fill="#ddd"/><path d="m129.707031 207.078125c-1.328125 0-2.648437-.386719-3.789062-1.148437l-34.132813-22.757813c-1.144531-.765625-2.039062-1.863281-2.550781-3.140625l-16.839844-42.105469c-.996093-2.496093-.441406-5.34375 1.425781-7.277343 1.859376-1.929688 4.699219-2.585938 7.21875-1.6875l50.972657 18.273437c2.714843.972656 4.519531 3.542969 4.519531 6.429687v46.585938c0 2.515625-1.386719 4.828125-3.605469 6.019531-1.003906.539063-2.113281.808594-3.21875.808594zm-28.582031-34.089844 21.753906 14.503907v-29.027344l-32.179687-11.53125zm0 0"/><path d="m382.292969 270.140625-34.132813 9.753906-13.652344 20.480469-34.132812 6.824219 27.304688 34.132812 54.613281 9.929688zm0 0" fill="#ddd"/><path d="m382.292969 358.089844c-.40625 0-.8125-.035156-1.21875-.109375l-54.613281-9.929688c-1.621094-.292969-3.082032-1.167969-4.113282-2.453125l-27.308594-34.132812c-1.484374-1.863282-1.890624-4.363282-1.078124-6.601563s2.738281-3.890625 5.074218-4.355469l31.359375-6.273437 12.085938-18.128906c.898437-1.347657 2.246093-2.332031 3.804687-2.777344l34.132813-9.753906c2.054687-.59375 4.273437-.171875 5.988281 1.113281 1.707031 1.292969 2.714844 3.308594 2.714844 5.449219v81.125c0 2.023437-.902344 3.945312-2.457032 5.238281-1.230468 1.035156-2.785156 1.589844-4.371093 1.589844zm-50.878907-23.015625 44.050782 8.007812v-63.894531l-23.019532 6.578125-12.257812 18.394531c-1.007812 1.503906-2.566406 2.550782-4.339844 2.90625l-23.136718 4.625zm0 0"/></svg>
                                   </div>
                                  </div>
                                  <div className="flip-card-back">
                                  <br></br>
                                    <h4 style={{color:'#FFFF'}}>Current Location</h4>                                   
                                    

                                  </div>
                                </div>
                              </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                  
                            </div>
                            </div>

                           
                            <br></br>
                                </Animated>
                                :null
                           }  
                           {!this.state.slide_4 ?null
                              :
                           <Animated animationIn="flipInY" animationOut="flipOutY" animationInDuration={400} animationOutDuration={400} isVisible={this.state.slide_4}>
                              <br></br>
                              
                             <div style={{textAlign:"center",position:"relative",marginLeft:30,height:468,width:400}} >
                             {this.state.mymap ?
                              
                                  
                                <Map
                                  google={this.props.google}
                                  center={{lat: 33.89157002284069, lng: 35.505436359863324}}
                                  height='300px'
                                  zoom={15}
                                  CarCallback = {this.callbackFunction}
                                  /> 
                                  :null
                             }
                              <br></br>
                                 
                             {this.state.airportmap ?
                              
                                 
                                <AirportMap
                                 
                                  google={this.props.google} 
                                  center={{lat: 33.818224777083636, lng: 35.49114555023198}}
                                  height='300px'
                                  zoom={15}
                                  CarCallback = {this.callbackFunction}
                                  /> 
                                  :null
                             }
                            {this.state.carownermap ?
                              
                                 
                              <AirportMap
                               
                                google={this.props.google}
                                center={{lat: 33.89157002284069, lng: 35.505436359863324}}
                                height='300px'
                                zoom={15}
                                CarCallback = {this.callbackFunction}
                                /> 
                                :null
                           }
                                
                              </div>  
                           </Animated>
                           }
                           {!this.state.slide_5 ?null
                              :
                           <Animated animationIn="flipInY" animationOut="flipOutY" animationInDuration={400} animationOutDuration={400} isVisible={this.state.slide_5}>
                              <br></br>
                             <div style={{textAlign:"center",position:"relative",marginLeft:30,marginTop:50,height:468,width:400}} >
                              <h4 className="text-white text-uppercase">Mr {this.state.name}</h4>
                              
                              <h4 className="text-white text-uppercase">your price is</h4>
                              <h4 className=" text-uppercase" style={{color:'#DC2d13'}}>
                              {this.state.car.map((car)=>(
                                <div key={car.id}>
                                    {(this.state.days)*(car.price)} $
                                    for {this.state.days} Days
                                </div>
                                            
                                  ))}
                              </h4>
                              <br></br>
                              <div className="row">
                               <img src='../../calendar.png' style={{height:30,marginRight:20,marginLeft:45}}/>
                               <div className="row" style={{marginTop:6}}>
                              <h4 className="text-white text-uppercase">from:</h4>
                              <h4 className="text-white">{this.state.value.start.format("YYYY-MM-DD")}</h4>
                              <h4 className="text-white text-uppercase" style={{marginLeft:10}}> - To:</h4>
                              <h4 className="text-white">{this.state.value.end.format("YYYY-MM-DD")}</h4>
                              </div>
                              </div>
                              <br></br>
                              <h4 className="text-white text-uppercase"><img src="../../icon/location.png" style={{height:30}}/> {this.state.address} </h4>
                              <br></br>
                             
                              
                                  
                                
                                
                              </div>  
                           </Animated>
                           }
                                <div className="form-group row">
                                {/* <div className="steps-action"> */}
                                {current > 0 & current < 4 && (
                                <button className="primary-btn text-uppercase"  onClick={() => this.prev()}>
                                     Back
                                </button>
                                )}
                                {current === steps.length - 1 && (
                                <button className="primary-btn text-uppercase parallelogram"  style={{marginLeft:200}} onClick={() => this.submit()}>
                                    Submit
                                </button>
                                )}
                                {current === steps.length  && (
                                <div></div>
                                )}
                                
                                {current < steps.length - 1 && (
                                <button className="primary-btn text-uppercase" style={{marginLeft:170}} onClick={() => this.next()}>
                                    continue >>
                                </button>
                                )}
                                
                                
                            {/* </div>  */}
                            </div>
                                </div>       
              
                                                
          </div>
                    </div>
          
                        
      </section>
           
               {/* <Map
                google={this.props.google}
                center={{lat: 18.5204, lng: 73.8567}}
                height='300px'
                zoom={15}
                /> */}


        </div> 
        
        
        );
       
    }
}
//export default Car;
if (document.getElementById('Car')) {
    ReactDOM.render(<Car />, document.getElementById('Car'));
}

            {/* <DateRangeExample /> */}
            {/* <Map
                google={this.props.google}
                center={{lat: 18.5204, lng: 73.8567}}
                height='300px'
                zoom={15}
                /> */}