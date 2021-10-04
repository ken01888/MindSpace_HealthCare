import React from "react";
import {List,Avatar} from 'antd';
import image from '../image2.jpeg'


const ServicesR = () =>{

    return (
        <List
            itemLayout='vertical'
            dataSource={['Aromatherapy']}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar shape='square' size={64} src={image} />}
                  title={<a href='https://ant.design'>Aromatherapy</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />

                <List.Item.Meta
                  avatar={<Avatar shape='square' size={64} src={image} />}
                  title={<a href='https://ant.design'>Couples</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />

                <List.Item.Meta
                  avatar={<Avatar shape='square' size={64} src={image} />}
                  title={<a href='https://ant.design'>Deep Tissue</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />

                <List.Item.Meta
                  avatar={<Avatar shape='square' size={64} src={image} />}
                  title={<a href='https://ant.design'>Hot Stone</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />

                

                

                

                
              </List.Item>
            )}
          ></List>
    )
};

export default ServicesR; 