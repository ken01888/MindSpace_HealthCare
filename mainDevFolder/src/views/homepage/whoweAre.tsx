import React, { PropsWithChildren } from 'react'
import { Row, Col, Space, List, Form, Input, Select } from 'antd'
import { motion, useMotionValue } from 'framer-motion'
import { Parallax } from 'rc-scroll-anim'
import { RouteComponentProps } from 'react-router-dom'

const whoweAre: React.FC = props => {
  const handleChange: EventListener = async (value: any) => {
    console.log(value)
    const data = await fetch('http://localhost:8080/consultation', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
    console.log(data)
    try {
      switch (data.ok) {
        case false:
          break
        case true:
          break
      }
    } catch (e) {
      console.error(e)
    }
  }

  // const listData2 = [
  //   {
  //     title: (
  //       <Parallax
  //         animation={{ x: 0, opacity: 1, playScale: [0.4, 0.8] }}
  //         style={{
  //           transform: 'translateX(-100px)',
  //           opacity: 0,
  //           marginLeft: '10px'
  //         }}
  //       >
  //         <motion.span
  //           style={{
  //             fontSize: '1.25rem',
  //             fontFamily: 'Lato,Nunito,sans-serif',
  //             fontWeight: 700,
  //             WebkitBackgroundClip: 'text',
  //             color: 'transparent',
  //             backgroundImage:
  //               'linear-gradient(to right, #D4FFEC 0%, #57F2CC 0%, #4596FB 100%)',
  //             border: '1px solid transparent',
  //             fontSmooth: 'auto',
  //             fontOpticalSizing: 'auto',
  //             marginRight: '3.2px'
  //           }}
  //         >
  //           Georgia
  //         </motion.span>
  //         <span
  //           style={{
  //             fontSize: '1.25rem',
  //             fontFamily: 'Lato,Nunito,sans-serif',
  //             fontWeight: 300,
  //             fontSmooth: 'auto',
  //             fontOpticalSizing: 'auto'
  //           }}
  //         >
  //           licensed and insured massage therapists.
  //         </span>
  //       </Parallax>
  //     )
  //   },
  //   {
  //     title: (
  //       <Parallax
  //         animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
  //         style={{ transform: 'translateX(-100px)', opacity: 0 }}
  //       >
  //         <p
  //           style={{
  //             fontSize: '1.25rem',
  //             fontFamily: 'Lato,Nunito,sans-serif',
  //             fontWeight: 300,
  //             fontSmooth: 'auto',
  //             fontOpticalSizing: 'auto',
  //             margin: '0px 10px'
  //           }}
  //         >
  //           {' '}
  //           <motion.span
  //             style={{
  //               WebkitBackgroundClip: 'text',
  //               color: 'transparent',
  //             backgroundImage:
  //               'linear-gradient(to right, #D4FFEC 0%, #57F2CC 0%, #4596FB 100%)',
  //               border: '1px solid transparent',
  //               fontOpticalSizing: 'auto',
  //               fontSize: '1.25rem',
  //               fontWeight: 700,
  //               marginRight: '3.2px'
  //             }}
  //           >
  //             Experienced
  //           </motion.span>
  //           mind-body therapies instructors.
  //         </p>
  //       </Parallax>
  //     )
  //   },
  //   {
  //     title: (
  //       <Parallax
  //         animation={{ x: 0, opacity: 1, playScale: [0.6, 0.8] }}
  //         style={{ transform: 'translateX(-100px)', opacity: 0 }}
  //       >
  //         <p
  //           style={{
  //             fontSize: '1.25rem',
  //             fontFamily: 'Lato,Nunito,sans-serif',
  //             fontWeight: 300,
  //             fontSmooth: 'auto',
  //             fontOpticalSizing: 'auto',
  //             margin: '0px 10px'
  //           }}
  //         >
  //           <motion.span
  //             style={{
  //               WebkitBackgroundClip: 'text',
  //               color: 'transparent',
  //             backgroundImage:
  //               'linear-gradient(to right, #D4FFEC 0%, #57F2CC 0%, #4596FB 100%)',
  //               border: '1px solid transparent',
  //               fontOpticalSizing: 'auto',
  //               fontSize: '1.25rem',
  //               fontWeight: 700,
  //               marginRight: '3.2px'
  //             }}
  //           >
  //             {''}
  //             Homebased
  //           </motion.span>
  //           services with zero travel fees.
  //         </p>
  //       </Parallax>
  //     )
  //   }
  // ]

  return (
    <Row justify='space-around' align='middle' style={{ margin: '5rem 0rem' }}>
      <Col xs={24} md={8}>
          

      <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.4, 0.8] }}
          style={{
            transform: 'translateX(-100px)',
            opacity: 0,
            marginLeft: '10px'
          }}
        >
          <motion.span
            style={{
              fontSize: '1.25rem',
              fontFamily: 'Lato,Nunito,sans-serif',
              fontWeight: 700,
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundImage:
                'linear-gradient(to right, #D4FFEC 0%, #57F2CC 0%, #4596FB 100%)',
              border: '1px solid transparent',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              marginRight: '3.2px'
            }}
          >
            Georgia
          </motion.span>
          <span
            style={{
              fontSize: '1.25rem',
              fontFamily: 'Lato,Nunito,sans-serif',
              fontWeight: 300,
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
          >
            licensed and insured massage therapists.
          </span>
        </Parallax>
        </Col>

        <Col xs={24} md={8}>

        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.4, 0.8] }}
          style={{
            transform: 'translateX(-100px)',
            opacity: 0,
            marginLeft: '10px'
          }}
        >
          <motion.span
            style={{
              fontSize: '1.25rem',
              fontFamily: 'Lato,Nunito,sans-serif',
              fontWeight: 700,
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundImage:
                'linear-gradient(to right, #D4FFEC 0%, #57F2CC 0%, #4596FB 100%)',
              border: '1px solid transparent',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              marginRight: '3.2px'
            }}
          >
            Experienced
            </motion.span>
          <span
            style={{
              fontSize: '1.25rem',
              fontFamily: 'Lato,Nunito,sans-serif',
              fontWeight: 300,
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
          >
            mind-body therapies instructors.
          </span>
        </Parallax>
        </Col>

        <Col xs={24} md={8}>

        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.4, 0.8] }}
          style={{
            transform: 'translateX(-100px)',
            opacity: 0,
            marginLeft: '10px'
          }}
        >
          <motion.span
            style={{
              fontSize: '1.25rem',
              fontFamily: 'Lato,Nunito,sans-serif',
              fontWeight: 700,
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundImage:
                'linear-gradient(to right, #D4FFEC 0%, #57F2CC 0%, #4596FB 100%)',
              border: '1px solid transparent',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              marginRight: '3.2px'
            }}
          >
            Homebased
            </motion.span>
          <span
            style={{
              fontSize: '1.25rem',
              fontFamily: 'Lato,Nunito,sans-serif',
              fontWeight: 300,
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
          >
            services with zero travel fees.
          </span>
        </Parallax>
      
      </Col>
      <Col xs={24} md={20} style={{ marginTop: '5vh' }}>
      <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.4, 0.8] }}
          style={{
            transform: 'translateX(-100px)',
            opacity: 0,
            marginLeft: '10px'
          }}
        >
        <h2
          style={{
            marginLeft: '10px',
            fontSize: '1.25rem',
            fontFamily: 'Lato,Nunito,sans-serif',
            fontWeight: 300,
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            width: '360px'
          }}
        >
          {' '}
          <motion.span
            style={{
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundImage:
                'linear-gradient(to right,  #5ed1dc, #4ec8cd, #3fbfbe, #31b6ae, #35b49d, #42b28b, #52af77, #79b05b, #a1ad41, #caa633, #f39a3b)',
              border: '1px solid transparent',
              fontOpticalSizing: 'auto',
              fontSize: '2.75rem',
              fontWeight: 700,
              marginRight: '5px'
            }}
          >
            Let
          </motion.span>
          us help you find the right therapy.
        </h2>
        {/* <motion.div style={{background:'linear-gradient(to right,  #5ed1dc, #4ec8cd, #3fbfbe, #31b6ae, #35b49d, #42b28b, #52af77, #79b05b, #a1ad41, #caa633, #f39a3b)',height:400,width:400,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'400px'}}>
        </motion.div> */}
        </Parallax>

        </Col>

        <Form
          name='basic'
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          style={{ width: '22.5rem', marginLeft: '10px' }}
          onFinish={handleChange}
        >
          <Form.Item
            name='firstname'
            rules={[
              { required: true, message: 'Please input your First Name!' }
            ]}
          >
            <Input placeholder='First Name' />
          </Form.Item>

          <Form.Item
            name='lastname'
            rules={[{ required: true, message: 'Please input your lastname!' }]}
          >
            <Input placeholder='Last Name' />
          </Form.Item>

          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please enter a valid email!' }]}
          >
            <Input placeholder='Email address' />
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
              placeholder='Health condition'
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
              <Select.Option value='Fibromyalgia'>Fibromyalgia</Select.Option>
              <Select.Option value='Frozen Shoulder'>
                Frozen Shoulder
              </Select.Option>
              <Select.Option value='Headaches'>Headaches</Select.Option>
              <Select.Option value='Hypertension'>Hypertension</Select.Option>
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
              <Select.Option value='Sports Injury'>Sports Injury</Select.Option>
              <Select.Option value='Surgical Recovery'>
                Surgical Recovery
              </Select.Option>
              <Select.Option value='Tennis Elbow'>Tennis Elbow</Select.Option>
              <Select.Option value='None'>None</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={'message'}>
            <Input.TextArea
              placeholder='Massage'
              style={{ width: '360px', height: '150px' }}
            />
          </Form.Item>
          <Form.Item>
            <motion.button
              style={{
                lineHeight: 1.5715,
                position: 'relative',
                display: 'inline-block',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                textAlign: 'center',
                backgroundImage: 'none',
                border: '2px solid white',
                boxShadow: '0 2px 0 rgb(0 0 0 / 2%)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                userSelect: 'none',
                touchAction: 'manipulation',
                height: '32px',
                padding: '3px 15px',
                fontSize: '14px',
                borderRadius: '3px',
                color: 'white',
                background:
                  'linear-gradient(to right,  #5ed1dc, #4ec8cd, #3fbfbe, #31b6ae, #35b49d, #42b28b, #52af77, #79b05b, #a1ad41, #caa633, #f39a3b)'
              }}
              whileHover={{
                scale: 1.1,
                border: '2px solid white',
                color: 'white',
                transition: { duration: 0.1 }
              }}
              whileTap={{
                scale: 0.9,
                background: 'black',
                color: 'white',
                transition: { duration: 0.1 }
              }}
            >
              Schedule Now
            </motion.button>
          </Form.Item>
        </Form>
    </Row>
  )
}

export default whoweAre
