import { Button, Form, Input, Space, Typography } from "antd";
import { useNavigate } from "react-router";
import type { LandLord, LandLordResponseDto } from "../models/user";
import { registerLandLord } from "../services/userServices";



export default function TenantPage()
{
    
    const navigate = useNavigate();
    const [form] = Form.useForm<LandLord>();


    return (
        <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography.Title level={2} style={{ textAlign: "center", marginBottom: 24 }}>
                Redirecting to the tenant app...
            </Typography.Title>
        </div>
    );
}