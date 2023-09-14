// import React from 'react';
import { Layout, Menu, Input, Row, Col } from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import Rings from '../rings';

const { Header } = Layout;

export default function Navbar() {
    let navigate = useNavigate("");
  return (
    // <Header style={{ backgroundColor: 'white', borderBottom: '1px solid #ccc' }}>
    <Header style={{ backgroundColor: '#e6a2ae', borderBottom: '1px solid #ccc', maxWidth: '90%' , marginLeft:"5rem",minHeight:"8rem"}}>
      <Row justify="space-between" align="middle">
      
        <Col span={6}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ margin: 0, marginRight: '10px', fontFamily: 'Brush Script MT, cursive' }}>Kaayaa <br /></h1>
            <h1 style={{ margin: 0, fontFamily: 'Brush Script MT, cursive' }}>Redefine yourself</h1>
          </div>
        </Col>
        
        <Col span={8} >
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{backgroundColor:"#e6a2ae"}}>
            <Menu.Item key="1" onClick={()=>{

            
            }}>Traditional jewellery</Menu.Item>
            <Menu.Item key="2" onClick={()=>{
                navigate('/ring')
            }}>Rings</Menu.Item>
            <Menu.Item key="3">Earrings</Menu.Item>
            <Menu.Item key="4">Design by Own</Menu.Item>
          </Menu>
        </Col>
        <Col span={6}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search"
              style={{ width: '200px', marginRight: '10px' }}
            />
            <UserOutlined style={{ fontSize: '20px', marginRight: '10px' ,cursor:"pointer"}} />
            <HeartOutlined style={{ fontSize: '20px', marginRight: '10px',cursor:"pointer" }} />
            <ShoppingCartOutlined style={{ fontSize: '20px' ,cursor:"pointer"}} />
          </div>
        </Col>
      </Row>
    </Header>
  );
}
