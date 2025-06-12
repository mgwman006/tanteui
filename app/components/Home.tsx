import { Button, Col, Flex, Progress, Row,Image } from 'antd';



export default function Home() {
  return (
      <Flex 
      
        gap={'0'}
        vertical 
        align="center" 
        justify="center" 
        style={{
          height: '100vh',
          background: 'linear-gradient(to bottom, #f0f2f5, #ffffff)'
        }}>
        <Row justify="center">
          <Col span={24} style={{ textAlign: 'center' }}>
                  <Progress
                    size={200}
                    type="dashboard"
                    steps={10}
                    percent={10}
                    trailColor="rgba(0, 0, 0, 0.06)"
                    strokeWidth={20}
                  />
          </Col>
        </Row>
        <Row>
        
          <Col span={24} style={{ textAlign: 'center'}} >
            <h3 style={{ fontSize:"25px"}}>Your one-stop solution for property management.</h3>
            <p style={{ fontSize:"20px"}}><i>Manage your properties with ease</i></p>
          </Col>
        </Row>
        
        <Row justify="center" align="middle">
          <Image preview={false} width='50%' src="/logo-black-white.png"></Image>

        </Row>
        

      </Flex>);
}
