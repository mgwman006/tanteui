import { Avatar, Flex, List, Image, Row, Col, Typography, Button, Anchor, Card } from "antd";
import { StarOutlined, LikeOutlined, MessageOutlined, MoreOutlined } from '@ant-design/icons';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';


const projectsList = [
    {
        title: 'Lets Explore Tanzania',
        description:'This is a partnership agreement with Lets Explore Tanzania, its a tour operator entity in tanzania. Our responsibility is to apply modern technologies for improving tourism experience in Tanzania',
        imagePath:'letsexp.jpeg',
        link: "http://www.letsexploretanzania.co.tz"
    },
    {
        title: 'Smart Contracts',
        description:'We are automating the rental process by reducing paper work and improving efficiency',
        imagePath:'contracticonumage.jpg',
        link:""
    }
];
export default function Projects()
{
    return (
        <div style={{width:'100%', padding:'20px'}}>
            <List
                style={{width:'100%', backgroundColor:'#E8E8E8'}}
                    grid={{
                        gutter: 16,
                        column: isMobile ? 1 :4
                    }}
                    bordered
                    header={<Typography.Title level={4}>List of Projects</Typography.Title>}
                    dataSource={projectsList}
                    renderItem={(item) => (
                        <List.Item
                        >
                            <Card 
                                title={item.title}
                                extra={<a href={item.link} target="_blanck">More</a>}
                                cover={
                                    <div style={{textAlign:'center'}}>
                                        <Image
                                        width='50%'
                                        alt="example"
                                        src={item.imagePath}
                                    />
                                    </div>
                                    
                                }
                            >
                                <Card.Meta 
                                    
                                    description={item.description}
                                />
                                
                            </Card>

                        </List.Item>
                    )}
                />

        </div>

    );
}