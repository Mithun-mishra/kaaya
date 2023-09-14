import React from 'react'
import {  Layout } from 'antd';
import { Typography, Divider } from 'antd';

const { Text } = Typography;
const { Footer } = Layout;
const contactContainerStyle = {
    display: 'flex',
   
    alignItems: 'center',
  };
  const addressStyle = {
    flex: 1,
  };
export default function FooterTab() {
  return (
    <>
    <Layout>
    <Footer
        // style={{
        //   textAlign: 'center',
         
        // }}
        style={{ color:"white",backgroundColor: '#e6a2ae', borderBottom: '1px solid #ccc', maxWidth: '90%' , marginLeft:"5rem"}}
      >
         <div style={contactContainerStyle}>
      <Text strong>CONTACT US</Text>
     
      <div style={addressStyle}>
        <Text>
          A1/3, Ganesh Lakshya Apartment,
          <Divider type="vertical" style={{ margin: '0 8px' }} />
          Jayprakash Udyaan, Adityapur, Jamshedpur
        </Text>
      </div>
      <Divider type="vertical" style={{ margin: '0 8px' }} />
      <div>
        <Text>
          Email: <a href="mailto:connect@kaayaa.in">connect@kaayaa.in</a>
        </Text>
        <Divider type="vertical" style={{ margin: '0 8px' }} />
        <Text>
          Phone: <a href="tel:+917857900626">+91 7857 900 626</a>
        </Text>
      </div>
    </div>
      <Divider />
       ©Copyright 2023 Kaayaa Jewellery. All rights reserved.
      </Footer>
    </Layout>
      
    </>
  )
}
