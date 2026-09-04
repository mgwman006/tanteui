import * as React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import type { Tenant } from '../models/user';
import { getTenants, registerTenant } from '../services/userServices';
import { Avatar, Button, Col, Flex, FloatButton, Input, List, Modal, Result, Row, Space, Tag, Tooltip, Typography } from 'antd';
import { RightOutlined} from '@ant-design/icons';




const landlordAppUrl = import.meta.env.VITE_LANDLORD_APP_URL?.trim();


export default function LandLordPage() {

    const params = useParams();
    const navigate = useNavigate();


    const navigateToLandlordApp = () => {
      if (landlordAppUrl) {
        window.open(landlordAppUrl, '_blank');
      } else {
        console.error('Landlord app URL is not defined.');
      }
    };

    useEffect(() => {

        try {
            navigateToLandlordApp();
        } catch (error) {
          console.log(error);
        }
    },[]);

  

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <Typography.Title level={2}>Redirecting to the landlord app...</Typography.Title>
      <p>
        You are being redirected to the landlord app. If you are not redirected automatically, please click the button below.
      </p>
      <Button type="primary" onClick={navigateToLandlordApp}>
        Click <RightOutlined />
      </Button>
    </div>
  );
}