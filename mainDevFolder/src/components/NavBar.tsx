import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Drawer, Row, Avatar, Menu, Badge, Tooltip } from 'antd'
import { motion } from 'framer-motion'
import {
  BookOutlined,
  BookTwoTone,
  AppstoreOutlined,
  MailOutlined,
  ProfileOutlined,
  SettingOutlined,
  InstagramOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled
} from '@ant-design/icons'
import Logo from '../brand.png'
import Logo1 from './icons/Logo1'
import { Color } from 'framer'

const NavBar = () => {
  const [visible, setVisible] = React.useState(false)

  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <React.Fragment>
      <Row justify='space-between' style={{marginTop:'.5rem'}}>
        <Col>
          <Button type='text' size='small' onClick={showDrawer}>
            <span
              style={{
                fontFamily: 'Lato',
                fontWeight: 600,
                verticalAlign: 'text-bottom',
                paddingLeft: '5px',
                fontSize: '20px',
                fontSmooth: 'auto',
                fontOpticalSizing: 'auto'
              }}
            >
              Mindspace&Bodywork
            </span>
          </Button>
        </Col>
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '.5rem'
          }}
        >
          <motion.button
            onClick={showDrawer}
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
              height: '45px',
              width:'45px',
              padding: '3px 12px',
              fontSize: '14px',
              background: 'content-box',
              fontSmooth: 'auto',
              fontOpticalSizing: 'auto',
              border:'none'
            }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
              
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1 },
              background:'black',
              color:'white'
              
            }}
          >
            {visible ? (
              <MenuUnfoldOutlined style={{ fontSize: '1.25rem' }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: '1.25rem' }} />
            )}
          </motion.button>
        </motion.div>
      </Row>

      <div >
        <Drawer
          placement='left'
          closable={true}
          onClose={onClose}
          visible={visible}
          headerStyle={{ backgroundColor: '#21aa99' }}
          bodyStyle={{backgroundColor: 'rgb(110, 218, 234)'}}
        >
          <Row>
            <Col xs={24}>
            <Link to='/'>
            <motion.button
              style={{
                lineHeight: 1.5715,
                position: 'relative',
                display: 'inline-block',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                textAlign: 'center',
                backgroundImage: 'none',               
                 border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                userSelect: 'none',
                touchAction: 'manipulation',
                height: '40px',
                padding: '4px 15px',
                fontSize: '1.75rem',
                borderRadius: '2px',
                color: 'black',
                background: 'rgb(110, 218, 234)',
                fontFamily:'Nunito'
              }}
              whileHover={{
                scale: 1.1,
                borderColor: 'black',
                color: 'black',
                transition: { duration: 0.1 }
              }}
              whileTap={{
                scale: .9,
                borderColor: 'black',
                color: 'black',
                transition: { duration: 0.1 }
              }}
            >
              Home
            </motion.button>
            </Link>
            </Col>
            <Col xs={24}>
            <Link to='/'>
            <motion.button
              style={{
                lineHeight: 1.5715,
                position: 'relative',
                display: 'inline-block',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                textAlign: 'center',
                backgroundImage: 'none',               
                 border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                userSelect: 'none',
                touchAction: 'manipulation',
                height: '40px',
                padding: '4px 15px',
                fontSize: '1.75rem',
                borderRadius: '2px',
                color: 'black',
                background: 'rgb(110, 218, 234)',
                fontFamily:'Nunito'
              }}
              whileHover={{
                scale: 1.1,
                borderColor: 'black',
                color: 'black',
                transition: { duration: 0.1 }
              }}
              whileTap={{
                scale: .9,
                borderColor: 'black',
                color: 'black',
                transition: { duration: 0.1 }
              }}
            >
              Clients
            </motion.button>
            </Link>
            </Col>
            <Col xs={24}>
            <Link to='/'>
            <motion.button
              style={{
                lineHeight: 1.5715,
                position: 'relative',
                display: 'inline-block',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                textAlign: 'center',
                backgroundImage: 'none',               
                 border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                userSelect: 'none',
                touchAction: 'manipulation',
                height: '40px',
                padding: '4px 15px',
                fontSize: '1.75rem',
                borderRadius: '2px',
                color: 'black',
                background: 'rgb(110, 218, 234)',
                fontFamily:'Nunito'
              }}
              whileHover={{
                scale: 1.1,
                borderColor: 'black',
                color: 'black',
                transition: { duration: 0.1 }
              }}
              whileTap={{
                scale: .9,
                borderColor: 'black',
                color: 'black',
                transition: { duration: 0.1 }
              }}
            >
              Appointments
            </motion.button>
            </Link>
            </Col>
            <Col xs={24}>
            <Link to='/about'>
            <motion.button
              style={{
                lineHeight: 1.5715,
                position: 'relative',
                display: 'inline-block',
                fontWeight: 400,
                whiteSpace: 'nowrap',
                textAlign: 'center',
                backgroundImage: 'none',               
                 border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                userSelect: 'none',
                touchAction: 'manipulation',
                height: '40px',
                padding: '4px 15px',
                fontSize: '1.75rem',
                borderRadius: '2px',
                color: 'black',
                background: 'rgb(110, 218, 234)',
                fontFamily:'Nunito'
              }}
              whileHover={{
                scale: 1.1,
                borderColor: 'black',
                color: 'black',
                transition: { duration: 0.1 }
              }}
              whileTap={{
                scale: .9,
                borderColor: 'black',
                color: 'black',
                transition: { duration: 0.1 }
              }}
            >
              About Us
            </motion.button>
            </Link>
            </Col>
            
           
          
          </Row>

          {/* <Row>
            <Col xs={8}>
              <Tooltip
                placement='bottomLeft'
                title={<p>Instagram</p>}
                trigger='hover'
              >
                <Avatar
                  src={
                    <InstagramFilled
                      style={{ fontSize: '24px', color: '#808080' }}
                    />
                  }
                ></Avatar>
              </Tooltip>
            </Col>
            <Col xs={8}>
              <Avatar
                src={
                  <FacebookFilled
                    style={{ fontSize: '24px', color: '#808080' }}
                  />
                }
              ></Avatar>
            </Col>
            <Col xs={8}>
              <Avatar
                src={
                  <TwitterSquareFilled
                    style={{ fontSize: '24px', color: '#808080' }}
                  />
                }
              ></Avatar>
            </Col>
          </Row> */}
        </Drawer>
      </div>
    </React.Fragment>
  )
}
export default NavBar
