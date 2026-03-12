import { Col, Flex, Progress, Row, Steps, Typography, Image, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function HomePage(){
    return(

          <Flex vertical>

              <Row align={"middle"} justify={'center'}>
                  <Col 
                    xs={24} sm={12} md={12} lg={12} xl={12} 
                    style={{textAlign:'center'}}
                    >
                                <Typography.Title>
                                  Build Scalable Software & Cloud Infrastructure
                                </Typography.Title>
                                <Typography.Title level={3}>We help startups and businesses design, build, and scale modern applications using cloud-native technologies and expert software development</Typography.Title>
                                <Button size="large" variant="outlined" color="green">Get a Free Consultation</Button>
                  </Col>

                 
{/* 
 Our Services
💻 Software Development

We design and develop modern applications tailored to your business needs.

Services include:

Custom Web Application Development

SaaS Platform Development

API Development & System Integration

Mobile App Development

Legacy System Modernization

☁️ Cloud Consulting

We help businesses leverage the power of the cloud to build scalable and cost-efficient systems.

Services include:

Cloud Architecture Design

Cloud Migration

DevOps & CI/CD Automation

Containerization & Kubernetes

Infrastructure as Code

Cloud Cost Optimization */}
                  {/* <Col 
                    xs={24} sm={12} md={12} lg={12} xl={12}  
                    >
                      <Image  preview={false} src="contractimage.jpg" alt="Property" />
                  </Col> */}
              </Row>

          </Flex>
                /* <Flex 
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
                
                </Flex> */

                
          

          
    )
    
      
    ;
}