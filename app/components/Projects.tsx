import { Avatar, Flex, List, Image, Row, Col, Typography, Button, Anchor, Card } from "antd";
import { StarOutlined, LikeOutlined, MessageOutlined, MoreOutlined } from '@ant-design/icons';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';


const projectsList = [
    {
        title: 'Lets Explore Tanzania',
        description:'This is a partnership agreement with Lets Explore Tanzania, its a tour operator entity in tanzania. Our responsibility is to apply modern technologies for improving tourism experience',
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
        <div style={
            {
                width:'100%', 
                paddingLeft:'20px',
                paddingRight:'20px',
                height:"100vh"
            }
            }>
            <List
                bordered
                itemLayout="vertical"
                style={{
                    width:'100%', 
                    paddingLeft:"5px",
                    paddingRight:"5px",
                    height:"100%"
                }}
                grid={{
                    gutter: 16,
                    column: isMobile ? 1 :4
                }}
                header={<Typography.Title level={4}>List of Projects</Typography.Title>}
                dataSource={projectsList}
                renderItem={(item) => (
                    <List.Item
                        style={
                            { 
                                borderRadius:"10px",
                                borderWidth:"0.5px", 
                                borderColor:"black" , 
                                borderStyle:"solid",
                                padding:"5px"

                            }
                        }

                        actions={[<a href={item.link} target="_blank">Go to Website</a>]}

                    >
                        <div

                        >
                            <List.Item.Meta
                            avatar={<Avatar src={item.imagePath} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.description}
                            />
                        </div>
                            
                    </List.Item>
                )}
            />

        </div>

    );
}