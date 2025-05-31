import { Button, Col, Flex, Progress, Row } from 'antd';



export default function Home() {
  return (
      <Flex 
        gap={'0'}
        vertical 
        align="center" 
        justify="center" >
        <Row justify="center">
          <Col span={24} style={{ textAlign: 'center' }}>
                  <Progress
                    type="dashboard"
                    steps={10}
                    percent={10}
                    trailColor="rgba(0, 0, 0, 0.06)"
                    strokeWidth={20}
                  />
          </Col>
        </Row>
        <Row>
        
          <Col span={24} style={{ textAlign: 'center'}}>
            <h1>Tante App</h1>
            <h3>Your one-stop solution for property management.</h3>
            <p><i>Manage your properties with ease</i></p>
          </Col>
        </Row>
       
        

        <Row justify="center" align="middle">
          <Col span={24} style={{ textAlign: 'center' }}>
              <Button color="green" size="large" href="/login" variant="solid">Give it a Try</Button>
          </Col>
        </Row>

      </Flex>);
}
