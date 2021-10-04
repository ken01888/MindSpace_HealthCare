import React from 'react';
import {Row,Col,Layout} from 'antd';
import { InstagramFilled,PhoneFilled, } from '@ant-design/icons';


const Footer =() =>{
    return(
      <Row
       justify='space-between'   
    >
      <Col md={8} style={{ color: 'black', fontFamily: 'Nunito',display:'flex',justifyContent:'center',alignItems:'center' }}>
           Phone number
 </Col>
      <Col md={8} style={{ color: 'black', fontFamily: 'Nunito',display:'flex',justifyContent:'center',alignItems:'center'  }}>
        Email Us
      </Col>
      <Col md={8} style={{ color: 'black', fontFamily: 'Nunito',display:'flex',justifyContent:'center',alignItems:'center'  }}>
        About Us
      </Col>
    </Row>
       
)
}
export default Footer;