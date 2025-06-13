import { Button, Col, Flex, Progress, Row,Image, Layout, Menu, Drawer } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import { Link, Outlet } from 'react-router-dom';
import { LikeOutlined, MenuOutlined, MessageOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { useState } from 'react';


const items = [
  {
    key: '1',
    label: <Link to="/" >Home</Link>,
  },
  {
    key: '2',
    label: <Link to="/" >About Us</Link>,
  },
  {
    key: '3',
    label: <Link to="/" >Progress</Link>,
  },
  {
    key: '4',
    label: <Link to="/" >Investors</Link>,
  }

];

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Layout>
      {
        isMobile ? 
        (
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              backgroundColor:'white'
            
            }}
          >
            
            <div>
                <MenuOutlined  onClick={() => setShowMenu(true)} style={{ fontSize:'25px'}}/>
                <Drawer
                    title="Menu"
                    placement="left"
                    onClose={() => setShowMenu(false)}
                    open={showMenu}
                    size='large'
                    >

                    <Menu
                      theme="light"
                      mode="vertical"
                      defaultSelectedKeys={['1']}
                      items={items}
                      style={{ flex: 1, minWidth: 0 }}
                      onClick={() => setShowMenu(false)}
                    />
                </Drawer>
            </div>

            {/* <div className="demo-logo" > */}
            <div style={{  width:'100%', alignContent:'center', color:'white', textAlign:'center'}}>
              <Image preview={false}  src="logo-white-black.png" width='60%'/>
            </div>
            
          
          </Header>
        )
        :
        ( 
            <Header
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                backgroundColor:'white'
              }}
            >
              <div className="demo-logo" >
                <Image preview={false}  src="mini.png"/>
              </div>
              <Menu
                theme='light'
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items}
                style={{ flex: 1, minWidth: 0 }}
              />
            
            </Header>
        )
      }
        
      <Content>
        <div>
          <Outlet />
        </div>
      </Content>
      <Footer>

      </Footer>
    </Layout>
      );
}
