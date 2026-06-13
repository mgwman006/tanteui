import { Button, Col, Divider, Form, Input, notification, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useAccount } from "../../store/account/AccountContext";
import { useEffect } from "react";
import { UserCreateRequestDto, UserDetailsDTO } from "../../types/types";
import { handleApiError } from "../../utilities/error-handler";
import { usersApi } from "../../api/api";
import { ArrowLeftOutlined, LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';


export default function UserProfile()
{
    const [notificationApi, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { state, dispatch } = useAccount();

    
    
    useEffect(() => {
        if (state?.accountDetails?.phoneNumber) 
        {
            const phoneNumber = state?.accountDetails?.phoneNumber;
            getUserDetails(phoneNumber);
        }
    }, []);

    const getUserDetails = async(phoneNumber:string) => 
    {
        try
        {
            const response = await usersApi.getByPhoneNumber(phoneNumber)
            dispatch({type: "APPEND_USER",payload: response});
        }
        catch(error:any)
        {
            handleApiError(error,notificationApi);
        }
    }

    const handleCreateUser = async () =>
    {
        try
        {
            const values = form.getFieldsValue();
            const userCreateDTO :UserCreateRequestDto = {
                firstName : values.firstName,
                lastName : values.lastName,
                phoneNumber: state?.accountDetails?.phoneNumber ?? ""
            };

            const response = await usersApi.registerUser(userCreateDTO);
            dispatch({type: "APPEND_USER",payload: response});
        }
        catch(error:any)
        {
            handleApiError(error,notificationApi);
        }
    }

    
    return (
        <>
            {
                ((state?.accountDetails?.userDetails != undefined ) && state?.accountDetails?.userDetails.firstName && state?.accountDetails?.userDetails.lastName)
                ? 
                (
                    <div>
                        <p>Navigate to Destination</p>
                        <p>{state?.accountDetails?.userDetails.firstName}</p>
                        <p>{state?.accountDetails?.userDetails.lastName}</p>
                    </div>
                    
                ):
                (
                    <div style={{ height:"100vh" }}>
                        {contextHolder}
                        <Row
                            justify={'center'}
                            align={'middle'}
                            style={{ height: "100%" }}
                        >
                            <Col xs={20} sm={20} md={6} lg={6} xl={6} xxl={6} >
                                
                                <Form
                                    size="large"
                                    layout="vertical"
                                    form={form}
                                    name="login"
                                    initialValues={{ remember: true }}
                                    style={{ maxWidth: 360 }}
                                    onFinish={handleCreateUser}
                                >
                                    <Form.Item
                                    >
                                        <h1>How can we address you</h1>
                                    </Form.Item>
                                    <Form.Item
                                        name="firstName"
                                        label="First Name"
                                        rules={[{ required: true, message: 'Please input your First Name!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="lastName"
                                        label="Last Name"
                                        rules={[{ required: true, message: 'Please input your last name!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button block type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="default" onClick={()=> navigate(-1)}>
                                        <ArrowLeftOutlined />
                                        </Button>
                                    </Form.Item>

                                </Form>
                            </Col>
                        </Row>     
                    </div>
                )
            }
        </>
        
    );
}