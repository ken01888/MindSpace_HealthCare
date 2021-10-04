import React from 'react'
import { Row, Col, Space, List, Popover } from 'antd'
import { motion, useMotionValue, useViewportScroll } from 'framer-motion'
import {
  CaretDownOutlined,
  CaretRightOutlined,
  InfoCircleFilled,
  LeftSquareFilled
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Massage = () => {
  const { scrollYProgress } = useViewportScroll()

  const listData2 = [
    {
      title: (
        <p
          style={{
            WebkitBackgroundClip: 'text',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            border: '1px solid transparent',
            fontWeight: 600,
            fontSize: '1.25rem',
            fontFamily: 'Nunito,sans-serif',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          <motion.div
            style={{
              backgroundColor: '#d3ffec',
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
          Aromatherapy
        </p>
      ),
      description: (
        <p
          style={{
            fontFamily: 'Lato,sans-serif',
            fontSize: '.875rem',
            color: 'black',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            fontWeight: 300,
            paddingRight: '2px',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          Aspecific type of therapy that incorporates the use of scented
          essential oils into a massage. The massage involves alternating
          between gentle and harder pressure while using a specific blend of
          essential oils.
        </p>
      )
    },
    {
      title: (
        <p
          style={{
            WebkitBackgroundClip: 'text',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            border: '1px solid transparent',
            fontWeight: 600,
            fontSize: '1.25rem',
            fontFamily: 'Nunito,sans-serif',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          <motion.div
            style={{
              backgroundColor: '#d3ffec',
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
          Cupping
        </p>
      ),
      description: (
          <p
            style={{
              fontFamily: 'Lato,sans-serif',
              fontSize: '.875rem',
              color: 'black',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              fontWeight: 300,
              paddingRight: '4px'
            }}
          >
            Cupping is a type of alternative therapy that originated in China.
            It involves placing cups on the skin to create suction. Cupping
            increases blood circulation to the area where the cups are placed.
          </p>
      )
    },
    {
      title: (
        <p
          style={{
            WebkitBackgroundClip: 'text',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            border: '1px solid transparent',
            fontWeight: 600,
            fontSize: '1.25rem',
            fontFamily: 'Nunito,sans-serif',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          <motion.div
            style={{
              backgroundColor: '#d3ffec',
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
          Deep Tissue
        </p>
      ),
      description: (
          <p
            style={{
              paddingRight: '4px',

              fontFamily: 'Lato,sans-serif',
              fontSize: '.875rem',
              color: 'black',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              fontWeight: 300
            }}
          >
            {' '}
            Deep tissue massage is a massage technique that’s mainly used to
            treat musculoskeletal issues, such as strains and sports injuries.
            It involves applying sustained pressure using slow, deep strokes to
            target the inner layers of your muscles and connective tissues.{' '}
          </p>
      )
    },
    {
      title: (
        <p
          style={{
            WebkitBackgroundClip: 'text',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            border: '1px solid transparent',
            fontWeight: 600,
            fontSize: '1.25rem',
            fontFamily: 'Nunito,sans-serif',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          <motion.div
            style={{
              backgroundColor: '#d3ffec',
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
          Hot Stone
        </p>
      ),
      description: (
          <p
            style={{
              paddingRight: '4px',

              fontFamily: 'Lato,sans-serif',
              fontSize: '.875rem',
              color: 'black',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              fontWeight: 300
            }}
          >
            Hot stone massage is a type of massage therapy that involves the use
            of smooth, heated stones. The massage therapist places the hot
            stones on specific points on your body and may also hold the stones
            while giving the massage
          </p>
      )
    },
    {
      title: (
        <p
          style={{
            WebkitBackgroundClip: 'text',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            border: '1px solid transparent',
            fontWeight: 600,
            fontSize: '1.25rem',
            fontFamily: 'Nunito,sans-serif',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          <motion.div
            style={{
              backgroundColor: '#d3ffec',
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
          Reflexology
        </p>
      ),
      description: (
          <p
            style={{
              paddingRight: '4px',

              fontFamily: 'Lato,sans-serif',
              fontSize: '.875rem',
              color: 'black',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              fontWeight: 300
            }}
          >
            Reflexology is the application of pressure to areas on the feet (or
            the hands). The theory behind reflexology is that areas of the foot
            correspond to organs and systems of the body. Pressure applied to
            the foot is believed to bring relaxation and healing to the
            corresponding area of the body.
          </p>
      )
    },
    {
      title: (
        <p
          style={{
            WebkitBackgroundClip: 'text',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            border: '1px solid transparent',
            fontWeight: 600,
            fontSize: '1.25rem',
            fontFamily: 'Nunito,sans-serif',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          <motion.div
            style={{
              backgroundColor: '#d3ffec',
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
          Sports
        </p>
      ),
      description: (
          <p
            style={{
              paddingRight: '4px',

              fontFamily: 'Lato,sans-serif',
              fontSize: '.875rem',
              color: 'black',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              fontWeight: 300
            }}
          >
            Sports massage is a form of massage involving the manipulation of
            soft tissue to benefit a person engaged in regular physical
            activity. Sports massage is designed to assist in correcting
            problems and imbalances in soft tissue that are caused from
            repetitive and strenuous physical activity and trauma.
          </p>
      )
    },
    {
      title: (
        <p
          style={{
            WebkitBackgroundClip: 'text',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            border: '1px solid transparent',
            fontWeight: 600,
            fontSize: '1.25rem',
            fontFamily: 'Nunito,sans-serif',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          <motion.div
            style={{
              backgroundColor: '#d3ffec',
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
          Swedish
        </p>
      ),
      description: (
          <p
            style={{
              paddingRight: '4px',

              fontFamily: 'Lato,sans-serif',
              fontSize: '.875rem',
              color: 'black',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              fontWeight: 300
            }}
          >
            
            Swedish massage or{' '}
            <span
              style={{
                WebkitBackgroundClip: 'text',
                fontSmooth: 'auto',
                fontOpticalSizing: 'auto',
                fontWeight: 900
              }}
            >
              classic massage
            </span>{' '}
            is a whole-body therapeutic massage treatment that works the soft
            tissues and muscles to help restore health - creating a calming and
            balancing effect on the nervous system
          </p>
      )
    },
    {
      title: (
        <p
          style={{
            WebkitBackgroundClip: 'text',
            fontSmooth: 'auto',
            fontOpticalSizing: 'auto',
            fontWeight: 600,
            fontSize: '1.25rem',
            fontFamily: 'Nunito,sans-serif',
            alignItems: 'flex-start',
            display: 'flex'
          }}
        >
          <motion.div
            style={{
              backgroundColor: '#d3ffec',
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
          Trigger Point
        </p>
      ),
      description: (
          <p
            style={{
              paddingRight: '4px',

              fontFamily: 'Lato,sans-serif',
              fontSize: '.875rem',
              color: 'black',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              fontWeight: 300
            }}
          >
            Trigger point therapy or{' '}
            <span
              style={{
                WebkitBackgroundClip: 'text',
                fontSmooth: 'auto',
                fontOpticalSizing: 'auto',
                fontWeight: 900
              }}
            >
              neuromuscular therapy{' '}
            </span>{' '}
            consists of alternating levels of concentrated pressure on the areas
            of muscle spasm. Pressure is applied with the fingers, knuckles,
            and/or elbow in ten to thirty second intervals to effectively
            alleviate the muscle spasm.
          </p>
      )
    }
  ]

  return (
    <Row
      // justify='space-around'
      align='middle'
      style={{
        height: '40rem'
      }}
    >
      <Col xs={20} md={10} push={1}>
        <Space
          direction='vertical'
          size='small'
          style={{ position: 'relative', zIndex: 2 }}
        >
          <h1
            style={{
              fontFamily: 'Nunito,sans-serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
          >
            Massage
          </h1>

          <p
            style={{
              fontFamily: 'Lato',
              fontWeight: 600,
              fontSize: '1rem',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
          >
            Business Hours
          </p>
          <p
            style={{
              fontFamily: 'Lato',
              fontWeight: 300,
              fontSize: '1rem',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              width: '16rem'
            }}
          >
            Tuesday - Friday <span>10:00am - 3: 00pm</span>
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
                border: '2px solid #d3ffec',
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
                background: '#d3ffec',
                fontFamily: 'Lato,sans-serif'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '-6px 6px 6px #bfbfbf',
                transition: { duration: 0.1 },
                color: 'black'
              }}
              whileTap={{
                scale: 0.975,
                boxShadow: '-6px 6px 2px #bfbfbf',
                transition: { duration: 0.1 },
                color: 'black',
                fontWeight: 400
              }}
            >
              Book Appointment
            </motion.button>
          </Link>
          <Col
        xs={20}
        md={10}
        style={{
          padding: '0px 0px 0px 1rem',
          overflow: 'scroll',
          height: '35vh',
          borderRadius: '6px',
          marginTop: '0rem'
        }}
        onScroll={() => {
          console.log(scrollYProgress)
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
        </Space>
      </Col>
    </Row>
  )
}

export default Massage
