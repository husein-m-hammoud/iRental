import React, { Component } from 'react';
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Card from './Card'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

 function onSubmit(){
  
 }

class App_card extends Component{


render(){
return(
  
  <Styles>
    
    <Form
       onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        
        pristine,
        values,
        active
      }) => {
        return (
          
          <form onSubmit={handleSubmit}>
            <Card
              number={values.number || ''}
              name={values.name || ''}
              expiry={values.expiry || ''}
              cvc={values.cvc || ''}
              focused={active}
            />
            <div>
              <Field
                name="number"
                component="input"               
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="Card Number"
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div >
              <Field
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                format={formatExpirationDate}
              />
              <Field
                name="cvc"
                style={{width:35}}
                component="input"
                type="text"
                pattern="\d{3,3}"
                placeholder="CVC"
                format={formatCVC}
              />
            </div>
          
            
          </form>
        )
      }}
    />
  </Styles>
);
    }
  }
export default App_card;
// render(<App />, document.getElementById('example'))

