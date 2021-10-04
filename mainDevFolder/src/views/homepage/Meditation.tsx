import React from 'react'
import { Row, Col, Space, List, Popover } from 'antd'
import { motion, useMotionValue, useViewportScroll } from 'framer-motion'
import { InfoCircleFilled, LeftSquareFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Meditation = () => {

  const listData2 = [
    {
      title: (
        <p

          style={{
            WebkitBackgroundClip: 'text',
            border: '1px solid transparent',
            fontOpticalSizing: 'auto',
            fontWeight: 600,
            fontSize: '1.25rem',
            fontFamily:'Nunito,sans-serif',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          <motion.div
            style={{
              backgroundColor: '#4596FB',
              boxShadow: 'rgb(136 136 136) 1px 1px 3px',
              height: '16px',
              width: '16px',
              borderRadius: '32px',
              margin: '5px 11px 0px 0px'
            }}
            // animate={{ scale: [1, 1, 0, 1, 1], y: [-5, 5, -5, 5, -5] }}
            animate={{ x: [3, 8, 3, 8, 3] }}
            transition={{ duration: 5, repeat: Infinity }}
          ></motion.div>
          Guided
        </p>
      ),
      description: (
        <p
          style={{
            fontFamily: 'Lato,sans-serif',
            fontSize: '1rem',
            color: 'black',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            fontWeight: 300,
            paddingRight:'2px'
          }}
        >
          A form of meditation which utilizes a number of different techniques
          to achieve or enhance the meditative state under the guidance of a
          trained practitioner.        </p>
      )

    }
  ]

  return (
    <Row justify='space-around' align='middle' style={{ backgroundColor: 'white', height: '20rem',marginTop:'5rem'}}>


      <Col xs={20} md={10} push={1}>
      
        <Space direction='vertical' size='small'

          style={{ position: 'relative', zIndex: 2 }}>
          <h1
            style={{
              fontFamily: 'Lato,sans-serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
          >
            Meditation

          </h1>

          <p
            style={{
              fontFamily: 'Nunito',
              fontWeight: 600,
              fontSize: '1rem',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
            }}
          >
            Business Hours
          </p>
          <p
            style={{
              fontFamily: 'Nunito',
              fontWeight: 300,
              fontSize: '1rem',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
          >
            Tuesday{' '}
            -
            Friday{' '}
            <span>
              10:00am
              - 3:
              00pm
            </span>
          </p>
          <p
            style={{
              fontFamily: 'Lato',
              fontWeight: 600,
              fontSize: '.875rem',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              color: 'black'
            }}
          >
            We request that all appointments be made 48 hours in advance of
            service.
          </p>
          <Link to='/booking'>
          <motion.button
              style={{
                lineHeight: 1.5715,
                position: 'relative',
                display: 'inline-block',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                textAlign: 'center',
                backgroundImage: 'none',
                border: '2px solid #4596FB',
                boxShadow: '-6px 6px 9px #bfbfbf',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                userSelect: 'none',
                touchAction: 'manipulation',
                height: '32px',
                padding: '4px 15px',
                fontSize: '14px',
                borderRadius: '2px',
                color: 'black',
                background:
                  '#4596FB',
                  fontFamily:'Lato,sans-serif'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '-6px 6px 6px #bfbfbf',
                transition: { duration: 0.1 },
                color:'black'
              }}
              whileTap={{
                scale: .975,
                boxShadow: '-6px 6px 2px #bfbfbf',
                transition: { duration: 0.1 },
                color:'black',
                fontWeight:400
              }}
            >
              Book Appointment
            </motion.button>
          </Link>
        </Space>
      </Col>
      <Col
        xs={20}
        md={10}
        style={{
          padding: '0px 0px 0px 1rem',
          overflow: 'scroll',
          height: '35vh',
          marginTop:'40px',
          borderRadius:'6px',
        }}
      >
        <List
          bordered={false}
          itemLayout='horizontal'
          dataSource={listData2}
          renderItem={item => (
            <List.Item style={{ borderBottom: 'none' }}>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>

  )
  // )
}

export default Meditation
