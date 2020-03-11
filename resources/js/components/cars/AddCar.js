import React, { Component } from 'react';
import ReactDOM from 'react-dom';
;


 
  
 class AddCar extends Component {
    constructor(state) {
        super(state)
        this.state = {
         
        }
        
      
    }
    
    
    
    componentDidMount(){
       
    }
    
    
    
    render() {
        return (
            <div className="banner-area1 " style={{position:"relative",height:'93%' ,alignItems:'center', backgroundRepeat:'no-repeat',backgroundSize:'100%'}} >
           <form   encType='multipart/form-data' className="overlay-bg "  style={{height:'100%' }}>
            <div className=" " style={{ backgroundColor: "" }}>
            <div className="">
                         
            
            <br></br>
            <h2 style={{color:'#FFF',marginLeft:14}}> Car  Information</h2>
            <br></br>
            <div className="form-group row">
                  <label style={{color:'#FFF'}}  className="col-md-4 col-form-label text-md-right">Car Name</label>

                            <div className="col-md-6">
                                <input type="text"
                                
                                 name="name" 
                                 value={this.props.name} 
                                 onChange={this.props.onChangeValue}
                                 className="form-controll "    />

                               
                            </div>
            </div>
            <div className="form-group row">
                  <label style={{color:'#FFF'}}  className="col-md-4 col-form-label text-md-right">Transmission</label>

                            <div className="col-md-6">
                            <select name="transmission" className="custom-select " onChange={this.props.onChangeValuee}  value={this.props.transmission} >
                           
                             <option value='Automatic' >Automatic</option>
                            <option value='Manual' >Manual</option>
                        
                             </select>

                               
                            </div>
            </div>    

            <div className="form-group row">
                  <label style={{color:'#FFF'}}  className="col-md-4 col-form-label text-md-right">Seat Capacity</label>

                            <div className="col-md-6">
                                <input type="text"
                                
                                 name="seats" value={this.props.seats} 
                                 onChange={this.props.onChangeValue}
                                 className="form-controll "  required  />

                               
                            </div>
            </div>

                

                               
                <input 
                    type="hidden"
                    placeholder="company_id"
                    name="company_id"
                    value={this.props.company_id} 
                    onChange={this.props.onChangeValue}
                    className=""
                />
                   
            <div className="form-group row">
                  <label style={{color:'#FFF'}}  className="col-md-4 col-form-label text-md-right">Price / Day</label>

                            <div className="col-md-6 row">
                            <div className="col-md-9" >
                                <input type="text"
                                
                                name="price" 
                                value={this.props.price}  
                                onChange={this.props.onChangeValue}
                                className="form-controll"  required  />
                            </div>
                                
                                 <div className="col-md-3"  style={{width:80}}>
                                 <select name="" className="custom-select " style={{width:80}}>
                           
                           <option value='Automatic' >USD</option>
                           <option value='Manual' >LBP</option>
                 
                      </select>   
                                 </div>
                                
                               
                            </div>
            </div>

                
            <div className="form-group row">
                  <label style={{color:'#FFF'}}  className="col-md-4 col-form-label text-md-right">Image</label>

                  <div className="col-md-6" >
                <input 
                    
                    type="file"
                    id="car_img"
                   
                    name="file[]"
                    value={this.props.image} 
                    onChange = {this.props.onChangeFile} 
                    className="form-controll"
                   
                    webkitdirectory mozdirectory msdirectory odirectory directory multiple 
                />
                   </div>
                </div>
                <div className="form-group row">
                  <label style={{color:'#FFF'}}  className="col-md-4 col-form-label text-md-right">About Car</label>

                            <div className="col-md-6">
                                <textarea type="textarea"
                                
                                 name="dis" value={this.props.dis} 
                                 onChange={this.props.onChangeValue}
                                 className="form-controlll "  required  ></textarea>

                               
                            </div>
            </div>
                
           
                           <br></br>
             <div className="col-12">
            <button className="primary-btn text-uppercase parallelogram" onClick={this.props.onAddBtn}>save</button>
            

            </div>

            </div>
        </div>
        </form> 
              
            
        </div>
        );
    }
}
export default AddCar;

// if (document.getElementById('add_car')) {
//     ReactDOM.render(<AddCar />, document.getElementById('add_car'));
// }
