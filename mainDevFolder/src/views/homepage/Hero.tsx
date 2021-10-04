import React from 'react'
import { animate, motion, useViewportScroll } from 'framer-motion'
import { Row, Col, Space, Card } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import { Link } from 'react-router-dom'
import {
  CaretDownOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  SettingTwoTone
} from '@ant-design/icons'

const Section_1 = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  const variants2 = {
    scale: { scale: 5 },
    duration: { duration: 1 }
  }

  return (
    <React.Fragment>
      <Row justify='center'>
        <Col xs={20} style={{ display: 'flex' }}>
          {/* <motion.div
          style={{
            backgroundImage:
              'linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)',
            boxShadow: 'rgb(136 136 136) 2px 2px 9px',
            height: '32px',
            width: '32px',
            borderRadius: '50px',
            marginTop: '40px'
          }}
          animate={{ y: [5, 10, 5, 10, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>
        <motion.div
          style={{
            backgroundImage:
              'linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)',
            boxShadow: 'rgb(136 136 136) 2px 2px 9px',
            height: '64px',
            width: '64px',
            borderRadius: '50px'
          }}
          // animate={{ scale: [1, 1, 0, 1, 1], y: [-5, 5, -5, 5, -5] }}
          animate={{ y: [5, 10, 5, 10, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div> */}
        </Col>

        <Col xs={20} style={{ textAlign: 'center', justifyContent: 'center' }}>
          <h1
            // style={{
            //   fontFamily: 'Nunito,sans-serif',
            //   WebkitBackgroundClih1: 'text',
            //   color: 'transparent',
            //   backgroundImage:
            //     'linear-gradient(to right, #D4FFEC 0%, #57F2CC 0%, #4596FB 100%)',
            //   border: '1px solid transparent',
            //   fontOpticalSizing: 'auto',
            //   fontWeight: 600,
            //   fontSize: '1.75rem'
            // }}
            style={{
              fontFamily: 'Lato,sans-serif',
              border: '1px solid transparent',
              fontOpticalSizing: 'auto',
              fontWeight: 600,
              fontSize: '2.5rem'
            }}
          >
            Mobile Alternative Healthcare Provider
          </h1>{' '}
          <p

            style={{
              fontFamily: 'Open Sans,sans-serif',
              border: '1px solid transparent',
              fontOpticalSizing: 'auto',
              fontWeight: 300,
              fontSize: '1.25rem'
            }}
          >
            MindSpaceBodyworks is a mobile alternative healthcare practice bringing the best in today's most popular and routinely researched mind-body therapies directly to you.
          </p>{' '}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '3rem'
            }}
          >
            <Col
              sm={2}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <CheckOutlined
                style={{
                  color: '#4596FB',
                  fontSize: '1rem',
                  marginRight: '5px'
                }}
              ></CheckOutlined>
              <motion.span
                style={{ fontFamily: 'Open Sans, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}

              >
                Licensed
              </motion.span>
            </Col>
            <Col
              sm={2}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <CheckOutlined
                style={{
                  color: '#4596FB',
                  fontSize: '1rem',
                  marginRight: '5px'
                }}
              ></CheckOutlined>
              <motion.span
                style={{ fontFamily: 'Open Sans, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}

              >
                Insured
              </motion.span>
            </Col>
            <Col
              sm={2}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <CheckOutlined
                style={{
                  color: '#4596FB',
                  fontSize: '1rem',
                  marginRight: '5px'
                }}
              ></CheckOutlined>
              <motion.span
                style={{ fontFamily: 'Open Sans, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                whileHover={{
                  cursor: 'pointer',
                  fontOpticalSizing: 'auto',
                  fontFamily: 'Open Sans,sans-serif',
                  scale: 1.1,
                  transition: { duration: 1 }
                }}
              >
                Mobile
              </motion.span>
            </Col>
          </motion.div>
          <Row style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <motion.div
              style={{
                borderBottom: '5px solid #4596FB',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '3rem 0rem'
              }}
            // animate={{ scale: [1, 1, 0, 1, 1], y: [-5, 5, -5, 5, -5] }}

            >
              <motion.span
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              //   animate={{ y: [7, -2, 7, -2, 7] }}
              // transition={{ duration: 10, repeat: Infinity }}
              >
                Services
              </motion.span>
            </motion.div>
          </Row>
          <p

            style={{
              fontFamily: 'Open Sans,sans-serif',
              border: '1px solid transparent',
              fontOpticalSizing: 'auto',
              fontWeight: 300,
              fontSize: '1.25rem'
            }}
          >
            Our services are <SettingTwoTone color='#4596FB' spin /> geared towards improving both the mind and body.
          </p>{' '}
          <h1
            style={{
              fontFamily: 'Lato,sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
          >
            Massage
          </h1>
          <motion.span
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            whileHover={{
              cursor: 'pointer',
              color: '#4596FB',
              fontOpticalSizing: 'auto',
              fontFamily: 'Open Sans,sans-serif'
            }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Aromatherapy
          </motion.span>{' '}
          /{' '}
          <motion.span
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            whileHover={{
              cursor: 'pointer',
              color: '#4596FB',
              fontOpticalSizing: 'auto',
              fontFamily: 'Open Sans,sans-serif'
            }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Deep Tissue
          </motion.span>{' '}
          /{' '}
          <motion.span
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            whileHover={{
              cursor: 'pointer',
              color: '#4596FB',
              fontOpticalSizing: 'auto',
              fontFamily: 'Open Sans,sans-serif'
            }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Hot Stone
          </motion.span>{' '}
          /{' '}
          <motion.span
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            whileHover={{
              cursor: 'pointer',
              color: '#4596FB',
              fontOpticalSizing: 'auto',
              fontFamily: 'Open Sans,sans-serif'
            }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Reflexology
          </motion.span>{' '}
          /{' '}
          <motion.span
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            whileHover={{
              cursor: 'pointer',
              color: '#4596FB',
              fontOpticalSizing: 'auto',
              fontFamily: 'Open Sans,sans-serif'
            }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Sports
          </motion.span>{' '}
          /{' '}
          <motion.span
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            whileHover={{
              cursor: 'pointer',
              color: '#4596FB',
              fontOpticalSizing: 'auto',
              fontFamily: 'Open Sans,sans-serif'
            }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Swedish
          </motion.span>{' '}
          /{' '}
          <motion.span
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            whileHover={{
              cursor: 'pointer',
              color: '#4596FB',
              fontOpticalSizing: 'auto',
              fontFamily: 'Open Sans,sans-serif'
            }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Trigger Point
          </motion.span>
          <h1
            style={{
              fontFamily: 'Lato,sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              marginTop: '1rem'
            }}
          >
            Yoga
          </h1>
          <motion.span
            whileHover={{
              cursor: 'pointer',
              color: '#4596FB',
              fontOpticalSizing: 'auto',
              fontFamily: 'Open Sans,sans-serif'
            }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Vinyasa
          </motion.span>
          <h1
            style={{
              fontFamily: 'Lato,sans-serif',
              fontSize: '1.5rem',
              fontWeight: 700,
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              marginTop: '1rem'
            }}
          >
            Meditation
          </h1>
          <motion.span
            whileHover={{
              cursor: 'pointer',
              color: '#4596FB',
              fontOpticalSizing: 'auto',
              fontFamily: 'Open Sans,sans-serif'
            }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Guided
          </motion.span>
        </Col>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
        <motion.div
          style={{
            borderBottom: '5px solid #4596FB',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '3rem 0rem'
          }}
        // animate={{ scale: [1, 1, 0, 1, 1], y: [-5, 5, -5, 5, -5] }}

        >
          <motion.span
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 600
            }}
          //   animate={{ y: [7, -2, 7, -2, 7] }}
          // transition={{ duration: 10, repeat: Infinity }}
          >
            Pricing
          </motion.span>
        </motion.div>




      </Row>

      <Row gutter={16}>
      <Col span={7}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={7}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={7}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    </React.Fragment>
  )
}

export default Section_1
