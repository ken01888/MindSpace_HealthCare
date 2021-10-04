import React from "react";
import {List,Avatar} from 'antd';
import image from '../image2.jpeg'


const ServicesL = () =>{

    return (
        <List
            itemLayout='vertical'
            dataSource={['Aromatherapy']}
            renderItem={item => (
              <List.Item>
                
                <List.Item.Meta
                  title={<a href='https://ant.design'>Reflexology</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />

                <List.Item.Meta
                  title={<a href='https://ant.design'>Sports</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />

                <List.Item.Meta
                  title={<a href='https://ant.design'>Swedish</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />

                <List.Item.Meta
                  title={<a href='https://ant.design'>Trigger Point</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />
              </List.Item>
            )}
          ></List>
    )
};

export default ServicesL; 