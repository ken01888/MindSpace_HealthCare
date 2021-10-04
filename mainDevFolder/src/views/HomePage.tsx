import React from 'react'

import { Col, Button, Form, Input } from 'antd'

import { ScheduleOutlined } from '@ant-design/icons'

import Section_1 from './homepage/Hero'
import Section_2 from './homepage/whoweAre'

import Massage from './homepage/Massage'
import { Parallax } from 'rc-scroll-anim'
import Yoga from './homepage/Yoga'
import Meditation from './homepage/Meditation'
import Clients from './homepage/Clients'

const Home: React.FC = () => {
  const [services, setServices] = React.useState(false)
  const [consultation, setConsultation] = React.useState(true)

  const freeConsultation = (
    <Col xs={24} md={12} style={{ marginTop: '5vh' }} push={1}>
      <h1
        style={{
          fontSize: '2.3vh',
          fontFamily: 'Nunito',
          fontWeight: 700,
          backgroundColor: '#21aa99',
          width: '35vh',
          textAlign: 'center',
          borderRadius: '4px',
          color: 'white'
        }}
      >
        Schedule your free consultation!
      </h1>

      <Form
        name='free consultation'
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        style={{ width: '35vh' }}
        // onFinish={handleChange}
      >
        <Form.Item
          name='firstname'
          rules={[{ required: true, message: 'Please input your First Name!' }]}
        >
          <Input placeholder='Enter your first name' />
        </Form.Item>

        <Form.Item
          name='lastname'
          rules={[{ required: true, message: 'Please input your lastname!' }]}
        >
          <Input placeholder='Enter your last name' />
        </Form.Item>

        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Please enter a valid email!' }]}
        >
          <Input placeholder='Enter a valid email address' />
        </Form.Item>

        <Form.Item
          name='phone'
          rules={[
            { required: true, message: 'Please enter a valid phone number!' }
          ]}
        >
          <Input placeholder='Enter a valid contact number' />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            size='large'
            style={{
              fontFamily: 'Lato,sans-serif',
              borderColor: '#22AA99'
            }}
            icon={<ScheduleOutlined style={{ color: '#22AA99' }} />}
            block={true}
          >
            Schedule Now
          </Button>
        </Form.Item>
      </Form>
    </Col>
  )

  const bookServices = (
    <Col xs={24} md={12} push={1}>
      <h1
        style={{
          fontSize: '2.3vh',
          fontFamily: 'Nunito',
          fontWeight: 700,
          backgroundColor: '#21aa99',
          width: '35vh',
          textAlign: 'center',
          borderRadius: '4px',
          color: 'white'
        }}
      >
        Book Today!
      </h1>

      <Form
        name='free consultation'
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        style={{ width: '35vh' }}
        // onFinish={handleChange}
      >
        <Form.Item
          name='firstname'
          rules={[{ required: true, message: 'Please input your First Name!' }]}
        >
          <Input placeholder='Enter your first name' />
        </Form.Item>

        <Form.Item
          name='lastname'
          rules={[{ required: true, message: 'Please input your lastname!' }]}
        >
          <Input placeholder='Enter your last name' />
        </Form.Item>

        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Please enter a valid email!' }]}
        >
          <Input placeholder='Enter a valid email address' />
        </Form.Item>

        <Form.Item
          name='phone'
          rules={[
            { required: true, message: 'Please enter a valid phone number!' }
          ]}
        >
          <Input placeholder='Enter a valid contact number' />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            size='large'
            style={{
              fontFamily: 'Lato,sans-serif',
              borderColor: '#22AA99'
            }}
            icon={<ScheduleOutlined style={{ color: '#22AA99' }} />}
            block={true}
          >
            Schedule Now
          </Button>
        </Form.Item>
      </Form>
    </Col>
  )

  const ourServices = (
    <Col xs={24} md={12} push={1}>
      <h1
        style={{
          fontSize: '2.3vh',
          fontFamily: 'Nunito',
          fontWeight: 700,
          backgroundColor: '#21aa99',
          width: '35vh',
          textAlign: 'center',
          borderRadius: '4px',
          color: 'white'
        }}
      >
        Book Today!
      </h1>

      <Form
        name='free consultation'
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        style={{ width: '35vh' }}
        // onFinish={handleChange}
      >
        <Form.Item
          name='firstname'
          rules={[{ required: true, message: 'Please input your First Name!' }]}
        >
          <Input placeholder='Enter your first name' />
        </Form.Item>

        <Form.Item
          name='lastname'
          rules={[{ required: true, message: 'Please input your lastname!' }]}
        >
          <Input placeholder='Enter your last name' />
        </Form.Item>

        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Please enter a valid email!' }]}
        >
          <Input placeholder='Enter a valid email address' />
        </Form.Item>

        <Form.Item
          name='phone'
          rules={[
            { required: true, message: 'Please enter a valid phone number!' }
          ]}
        >
          <Input placeholder='Enter a valid contact number' />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            size='large'
            style={{
              fontFamily: 'Lato,sans-serif',
              borderColor: '#22AA99'
            }}
            icon={<ScheduleOutlined style={{ color: '#22AA99' }} />}
            block={true}
          >
            Schedule Now
          </Button>
        </Form.Item>
      </Form>
    </Col>
  )

  return (
    <>
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.0, 0.4] }}
        style={{ transform: 'translateY(100px)', opacity: 1 }}
      >
        <Section_1 />
      </Parallax>

      {/* <Section_2/> */}

      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.4, 0.5] }}
        style={{ transform: 'translateY(100px)', opacity: 0 }}
      >
        <Massage />
      </Parallax>

      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.5, 0.6] }}
        style={{
          transform: 'translateZ(100px)',
          opacity: 0,
          marginTop: '10rem'
        }}
      >
        <Yoga />
      </Parallax>

      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.6, 0.7] }}
        style={{
          transform: 'translateY(100px)',
          opacity: 0,
          marginBottom: '20rem'
        }}
      >
        <Meditation />
      </Parallax>

      <Clients />
    </>
  )
}

export default Home
