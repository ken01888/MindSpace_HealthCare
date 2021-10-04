import React from 'react'
import { motion } from 'framer'
import {
  Button,
  Col,
  Form,
  Row,
  Select,
 
} from 'antd'
import {RouteComponentProps} from 'react-router-dom'
import 'isomorphic-fetch'
import {
 
  ArrowLeftOutlined
} from '@ant-design/icons'

interface Form_2 extends Object {
  gender:string,
  age:string,
  lifestyle:string,
  condition:string[]|string,
  pain:string,
  severity?:string
}

const Booking_2: React.FC<RouteComponentProps> = props => {
  const [pain, setPain] = React.useState<string|any>()
 
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
           props.history.push('/booking/2')
           break;
       }
         
     }catch (e){
       console.error(e)
 
     }
   }
  const goBack = () => {
    props.history.goBack()
  }
   
  const painLevel = <Form.Item
  name='severity'
  rules={[
    {
      required: true,
      message: 'Please enter your present level of pain'
    }
  ]}
>
  <Select placeholder='How severe is your pain?'>
    <Select.Option value='Low pain'>Low pain</Select.Option>
    <Select.Option value='Mild pain'>Mild pain</Select.Option>
    <Select.Option value='Moderate pain'>
      Moderate pain
    </Select.Option>
    <Select.Option value='Severe pain'>Severe pain</Select.Option>
    <Select.Option value='Very severe pain'>
      Very severe pain
    </Select.Option>
    <Select.Option value='Worst pain possible'>
      Worst pain possible
    </Select.Option>
  </Select>
</Form.Item>;

  return (
      <Row justify='center'>
  
          <Col sm={24} style={{ display: 'flex', justifyContent: 'center',marginTop:'15vh' }}>
            <p
              style={{
                fontFamily: 'Nunito,sans-serif',
                fontWeight: 900,
                fontSize: '2rem'
              }}
            >
              Tell us about yourself.
            </p>
          </Col>
          <Col sm={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <Form
              name='basic'
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={handleChange}
              style={{ width: '20rem' }}
            >
              <Form.Item
                name='gender'
                rules={[
                  { required: true, message: 'Please select your gender!' }
                ]}
              >
                <Select placeholder='What is your gender?' onSelect={value => {
                window.localStorage.setItem('gender', `${value}`)
                
              }} >
                  <Select.Option value='Female'>Female</Select.Option>
                  <Select.Option value='Male'>Male</Select.Option>
                  <Select.Option value='Nonbinary'>I'd prefer not to answer</Select.Option>

                </Select>
              </Form.Item>

              <Form.Item
                name='age'
                rules={[
                  { required: true, message: 'Please select range of age.' }
                ]}
              >
                <Select placeholder='Select your age range.' onSelect={value => {
                window.localStorage.setItem('age', `${value}`)
                
              }}>
                  <Select.Option value='18-24'>18-24</Select.Option>
                  <Select.Option value='25-44'>25-44</Select.Option>
                  <Select.Option value='45-64'>45-64</Select.Option>
                  <Select.Option value='65-over'>65 or over</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name='lifestyle'
                rules={[
                  { required: true, message: 'Please select your way of life' }
                ]}
              >
                <Select placeholder='Describe you physical lifestyle.' onSelect={value => {
                window.localStorage.setItem('lifestyle', `${value}`)        
              }}              
              >
                  <Select.Option value='Sedantary lifestyle'>
                    Sedantary lifestyle
                  </Select.Option>
                  <Select.Option value='Light physical lifestyle'>
                    Light physical lifestyle
                  </Select.Option>
                  <Select.Option value=' Moderate  physical lifestyle'>
                    Moderate physical lifestyle
                  </Select.Option>
                  <Select.Option value=' Vigirous  physical lifestyle'>
                    Vigirous physical lifestyle
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name='condition'
                rules={[
                  {
                    required: true,
                    message:
                      'Please select any conditions that you may suffer from, you may select none or more than one.'
                  }
                ]}
              >
                <Select
                  mode='multiple'
                  placeholder='Health conditions that apply to you?'
                  onSelect={value => {
                    window.localStorage.setItem('condition', `${value}`)
                    
                  }}
                >
                  <Select.Option value='Anxiety'>Anxiety</Select.Option>
                  <Select.Option value='Arthritis'>Arthritis</Select.Option>
                  <Select.Option value='Asthma'>Asthma</Select.Option>
                  <Select.Option value='Breathing Issue'>
                    Breathing Issue
                  </Select.Option>
                  <Select.Option value='Carpal Tunnel Syndrome'>
                    Carpal Tunnel Syndrome
                  </Select.Option>
                  <Select.Option value='Depression'>Depression</Select.Option>
                  <Select.Option value='Fibromyalgia'>
                    Fibromyalgia
                  </Select.Option>
                  <Select.Option value='Frozen Shoulder'>
                    Frozen Shoulder
                  </Select.Option>
                  <Select.Option value='Headaches'>Headaches</Select.Option>
                  <Select.Option value='Hypertension'>
                    Hypertension
                  </Select.Option>
                  <Select.Option value='Insomnia'>Insomnia</Select.Option>
                  <Select.Option value='Muscle Pain'>Muscle Pain</Select.Option>
                  <Select.Option value='Muscle sprains and strains'>
                    Muscle sprains and strains
                  </Select.Option>
                  <Select.Option value='Myofascial Pain Syndrome'>
                    Myofascial Pain Syndrome
                  </Select.Option>
                  <Select.Option value='Rotator Cuff Syndrome'>
                    Rotator Cuff Syndrome
                  </Select.Option>
                  <Select.Option value='Sciatica'>Sciatica</Select.Option>
                  <Select.Option value='Sports Injury'>
                    Sports Injury
                  </Select.Option>
                  <Select.Option value='Surgical Recovery'>
                    Surgical Recovery
                  </Select.Option>
                  <Select.Option value='Tennis Elbow'>
                    Tennis Elbow
                  </Select.Option>
                  <Select.Option value='None'>None</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name='pain'
                rules={[
                  {
                    required: true,
                    message: 'Let us know if you are felling any pain.'
                  }
                ]}
              >
                <Select placeholder='Are you experience any pain?'
                onChange={(value)=>{if (value =='Yes'){setPain(true)}else{
                  setPain(false)
                  
                }}}
                onSelect={value => {
                  window.localStorage.setItem('pain', `${value}`);       
                }}
                >
                  <Select.Option value='Yes'>Yes</Select.Option>
                  <Select.Option value='No'>No</Select.Option>
                </Select>
              </Form.Item>

              {pain ? painLevel : null}

              
              <Form.Item>
                <motion.div
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                  <Button
                    type='text'
                    size='large'
                    icon={<ArrowLeftOutlined />}
                    onClick={goBack}
                    style={{ fontFamily: 'Lato,sans-serif' }}
                  >
                    Go Back
                  </Button>
                  <Button
                    htmlType='submit'
                    size='large'
                    style={{
                      fontFamily: 'Lato,sans-serif',
                      backgroundColor: '#97c8ea'
                    }}
                    block={true}
                  >
                    Continue
                  </Button>
                </motion.div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      
  )
}

export default Booking_2


