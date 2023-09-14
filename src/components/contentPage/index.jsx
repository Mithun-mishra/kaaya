import React from 'react'
import {Typography} from 'antd';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

export default function ContentPage() {
  return (
    <>
      <div style={{marginLeft:"3rem"}}>
      <img style={{width:"95%"}}
       
        src="https://www.kaayaa.in/static/media/sliderImg1.df4914d057f4cffb4a1c.jpg"
        alt="Slider Image"
      />
<br />
<br />
<br />
  
  <Row style={{marginLeft:"12rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Col span={8}>
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>
      <Col span={8}>
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>
      <Col span={8}>
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>
    </Row>
        </div>
    </>
  )
}
