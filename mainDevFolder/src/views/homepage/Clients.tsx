import React from 'react'
import { animate, motion, useViewportScroll } from 'framer-motion'
import { Row, Col, Space, Collapse } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import { Link } from 'react-router-dom'


const Clients = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  const variants2 = {
    scale: { scale: 5 },
    duration: { duration: 1 }
  }



  return (

    <Row justify='center' align='middle' style={{ height: '30vh', marginTop: '65px' }}>
      

      <Col xs={22} >

 
       
      <h1
            style={{
              fontFamily: 'Nunito,sans-serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto'
            }}
          >
           Service Information
          </h1>



      </Col>
      <Row>

      
      <Col md={24} style={{width:'90vw'}}>

      <Collapse onChange={(key)=>console.log(key)}>
    <Collapse.Panel header="This is Collapse.Panel header 1" key="1">
      <Collapse defaultActiveKey="1">
        < Collapse.Panel header="This is Collapse.Panel nest Collapse.Panel" key="1">
          <p>hello</p>
        </Collapse.Panel>
      </Collapse>
    </Collapse.Panel>
    <Collapse.Panel header="This is Collapse.Panel header 2" key="2">
      <p>hello</p>
    </Collapse.Panel>
    <Collapse.Panel header="This is Collapse.Panel header 3" key="3">
      <p>hello</p>
    </Collapse.Panel>
  </Collapse>
            </Col>
            </Row>

      

    </Row>
  )
}

export default Clients