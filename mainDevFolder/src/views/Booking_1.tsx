import React from 'react'
import { motion } from 'framer'
import { Col, Form, Input, Row} from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import 'isomorphic-fetch'



const Booking: React.FC<RouteComponentProps> = props => {
  const handleChange:EventListener = async (value: any) => { 
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
          props.history.push('/booking/1')
          break;
      }
        
    }catch (e){
      console.error(e)

    }
  }



 

  return (
    <Row justify='center' style={{height:'68vh'}}>
      <Col
        sm={24}
        style={{ display: 'flex', justifyContent: 'center', marginTop: '15vh' }}
      >
        <p
          style={{
            fontFamily: 'Nunito,sans-serif',
            fontWeight: 600,
            fontSize: '2rem',
            textAlign:'center'
          }}
        >
          Start booking your appointment.
        </p>
      </Col>
      <Col sm={24} style={{ display: 'flex', justifyContent: 'center' }}>
        <Form
          name='basic'
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          style={{ width: '20rem' }}
          onFinish={handleChange}
        >
          <Form.Item
            name='firstname'
            rules={[
              { required: true, message: 'Please input your First Name!' }
            ]}
          >
            <Input
              placeholder='Enter your first name'
            />
          </Form.Item>

          <Form.Item
            name='lastname'
            rules={[{ required: true, message: 'Please input your lastname!' }]}
          >
            <Input
              placeholder='Enter your last name'
              
            />
          </Form.Item>

          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please enter a valid email!' }]}
          >
            <Input
              placeholder='Enter a valid email address'
              
            />
          </Form.Item>

          <Form.Item
            name='phone'
            rules={[
              { required: true, message: 'Please enter a valid phone number!' }
            ]}
          >
            <Input
              placeholder='Enter a valid contact number'
            />
          </Form.Item>
          <Form.Item>
          <motion.button
          type='submit'
            style={{
              lineHeight: 1.5715,
              position: 'relative',
              display: 'inline-block',
              fontWeight: 400,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              boxShadow: '0 2px 0 rgb(0 0 0 / 2%)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
              userSelect: 'none',
              touchAction: 'manipulation',
              height: '32px',
              padding: '4px 15px',
              fontSize: '14px',
              borderRadius: '2px',
              color: 'black',
             
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 }
            }}
          >
            Next
          </motion.button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Booking
