import { Col, Flex, Progress, Row, Steps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function HomePage(){
    return(

          <Flex 
              gap={'0'}
              vertical 
              align="center" 
            //   justify="center" 
              style={{
                height: '100vh',
                background: 'linear-gradient(to bottom, #f0f2f5, #ffffff)'
              }}>
                
                <Row justify='center'>
                
                  <Col span={24} style={{ textAlign: 'center'}} >
                    <h3 style={{ fontSize:"25px"}}>We are disrupting the real estate industry using modern technologies, blockchain, AI and cloud</h3>
                  </Col>
                 
                </Row>
                <Row justify='center'>
                     <Col  span={18} >
                             <Steps
                                current={0}
                                // onChange={onChange}
                                direction="vertical"
                                items={[
                                {
                                    title: 'Smart Contracts',
                                    description: 'We are automating the process by reducing paper work and improving efficiency',
                                    icon: <LoadingOutlined />,
                                },
                                {
                                    title: 'Payment',
                                    description: 'We facilitate rental colections and invoice generations',
                                },
                                {
                                    title: 'Property Management',
                                    description: 'Maintenance  requests and property transfer',
                                },
                                ]}
                            />
                  </Col>
                </Row>
                
            </Flex>
    )
    
      
    ;
}