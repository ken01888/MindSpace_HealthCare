import React from "react";
import { Button,Col,Row} from "antd";
import 'isomorphic-fetch'



const Booking_5 = (props:any) =>{
  const [form,setForm] = React.useState<string|number|any|{}>()
  const [modal,setModal]= React.useState(false)  

  const goBack = () =>{
    props.history.goBack()
}

const handleChange = async (value:any) => { 
  const data = await fetch('http://localhost:8080/booking/',{
     method:"Post",
     headers:{
         "Content-Type":"application/json"
     },
     body:JSON.stringify(value)
   })
  
   try{
     switch (data.ok) {
       case false:
         props.history.push('/')
         break;
       case true:
         props.history.push('booking/1')
         break;
     }
       
   }catch (e){
     console.error(e)

   }
 }

  const modalClick = () =>{
    setModal(!modal)
  }

  const information = {
    patient:window.localStorage.getItem('patient'),
    health:window.localStorage.getItem('health'),
    service:window.localStorage.getItem('service')
  }
    console.log(window.localStorage.getItem('patient'))
  
  console.log(modal)



    return (
     
       

  <Row justify='center' >
  <Col sm={12}>
    
    </Col>
<Col sm={24} style={{display:'flex', justifyContent:'center'}}>
  <p style={{fontFamily:'Nunito,sans-serif', fontWeight:900,fontSize:'2rem'}}>Final Step</p>
  </Col>
  <Col sm={24} style={{display:'flex', justifyContent:'center'}}>
    <Button htmlType='button' onClick={modalClick} type='text' style={{color:'red'}}>Terms of service</Button>

  </Col>


    </Row>

 
    )
};

export default Booking_5; 