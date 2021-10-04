import React from "react";
import {motion} from 'framer'
import { Button,Col, Form,  Row, Select,DatePicker, TimePicker } from "antd";
import 'isomorphic-fetch'
import { ArrowLeftOutlined} from "@ant-design/icons";

interface Form_3 extends Object {
  therapy:string,
  region:string,
  pressure:string,
  date:string[]|string,
  time:string,
}

const Booking_3 = (props:any) =>{
  const [form,setForm] = React.useState<string|number|any|{}>()
 
  
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
         props.history.push('booking/3')
         break;
     }
       
   }catch (e){
     console.error(e)

   }
 }
    return (
         


  <Row justify='center' >
 
<Col sm={24} style={{display:'flex', justifyContent:'center' ,marginTop:'15vh'}}>
  <p style={{fontFamily:'Nunito,sans-serif', fontWeight:900,fontSize:'2rem'}}>Service Questionnaire.</p>
  </Col>
  <Col sm={24} style={{display:'flex', justifyContent:'center'}}>
    <Form
      name="basic"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={handleChange}
      style={{width:'20rem'}}
    >
      
      <Form.Item
        name="therapy"
        rules={[{ required: true, message: 'Please select a service.' }]}
      >
                <Select placeholder='Select preferred service.'>
                  <Select.Option value='Sedantary lifestyle'>
                  Aromatherapy - $60 
                   </Select.Option>
                  <Select.Option value='Light physical lifestyle'>
                  Deep Tissue - $60                 
                   </Select.Option>
                  <Select.Option value=' Moderate  physical lifestyle'>
                  Hot Stone - $60
                  </Select.Option>
                  <Select.Option value=' Vigirous  physical lifestyle'>
                  Reflexology - $60
                  </Select.Option>
                  <Select.Option value=' Vigirous  physical lifestyle'>
                  Sports - $60
                  </Select.Option>
                  <Select.Option value=' Vigirous  physical lifestyle'>
                  Swedish - $60 
                  </Select.Option>
                  <Select.Option value=' Vigirous  physical lifestyle'>
                  Trigger Point - $60
                  </Select.Option>
                </Select>      
        </Form.Item>

      <Form.Item
        name="region"
        rules={[{ required: true, message: 'Please input your lastname!' }]}
      >
              <Select placeholder='Select region of focus.'>
                  <Select.Option value='All'>
                  All 
                   </Select.Option>
                  <Select.Option value='Head'>
                  Head                
                   </Select.Option>
                  <Select.Option value='Neck'>
                  Neck
                  </Select.Option>
                  <Select.Option value='Shoulder'>
                  Shoulder
                  </Select.Option>
                  <Select.Option value=' Chest'>
                  Chest
                  </Select.Option>
                  <Select.Option value='Back'>
                  Back 
                  </Select.Option>
                  <Select.Option value='Stomach'>
                  Stomach
                  </Select.Option>
                  <Select.Option value='Arm'>
                  Arm
                  </Select.Option>
                  <Select.Option value='Elbow'>
                  Elbow
                  </Select.Option>
                  <Select.Option value='Legs'>
                  Legs
                  </Select.Option>
                  <Select.Option value='Knee'>
                  Knee
                  </Select.Option>
                  <Select.Option value='Calves'>
                  Calves
                  </Select.Option>
                  <Select.Option value='Feet'>
                  Feet
                  </Select.Option>
                </Select> 
                      </Form.Item>

      <Form.Item
        name="pressure"
        rules={[{ required: true, message: 'Please select pressure!' }]}
      >
<Select placeholder='Select desired pressure.' style={{color:'black'}}>
                  <Select.Option value='Level 1'>
                  Light Pressure
                   </Select.Option>
                  <Select.Option value='Level 2'>
                  Medium Pressure               
                   </Select.Option>
                  <Select.Option value='Level 3'>
                  Deep Pressure Massage
                  </Select.Option>
                  
                </Select>       
              </Form.Item>

      <Form.Item
        name="date"
        rules={[{ required: true, message: 'Please select a appointment date!' }]}
      >
      <DatePicker style={{width:'18.5rem'}} placeholder='Select date of service'  renderExtraFooter={() => 'extra footer'} />
      </Form.Item>

      <Form.Item
        name="time"
        rules={[{ required: true, message: 'Please select a appointment time!' }]}
      >
    <TimePicker placeholder='Select time of service' style={{width:'18.5rem'}} use12Hours  />
      </Form.Item>
      
  
      

      <Form.Item >
        <motion.div className="div">
        <Button  type='text' size='large' icon={<ArrowLeftOutlined />} onClick={goBack} style={{fontFamily:'Lato,sans-serif'}} >Go Back</Button>

        <Button htmlType='submit' size='large' style={{fontFamily:'Lato,sans-serif',backgroundColor:'#97c8ea'}} >Continue</Button>      

        </motion.div>

      

      </Form.Item>
    </Form>
    </Col>


    </Row>
    )
};

export default Booking_3; 