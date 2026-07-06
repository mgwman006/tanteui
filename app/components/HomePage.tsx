
import {
  Button,
  Typography,
  Form,
  Input,
} from "antd";
import {
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";

const authUrl :string = import.meta.env.VITE_AUTH_URL;
const rentManagerUrl :string = import.meta.env.VITE_RENT_MANAGER_URL;


const { Title, Paragraph, Text } = Typography;

// ─── Brand tokens ───────────────────────────────────────────
const NAVY = "#0F172A";
const TEAL = "#0F766E";
const TEAL_L = "#14B8A6";
const AMBER = "#D4A017";
const MUTED = "#64748B";
const BORDER = "#94A3B8";
const OFF = "#F8FAFC";





export const navigateToAuth = (nextApp:string, phone: string) => {
  const outGoingUrlValue = getOutGoingUrl(nextApp);
  window.open(authUrl+"?outGoingUrl="+outGoingUrlValue+"&phoneNumber="+phone, "_blank");
};

const getOutGoingUrl = (nextApp: string) : string | null => {
  if(nextApp==="rent-manager")
  {
    return rentManagerUrl;
  }
  return null;
}

export default function HomePage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const phone = Form.useWatch("phone", form);
  const isPhoneFilled = Boolean(phone?.toString().trim());

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section
        style={{
          padding: "96px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative orbs */}
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          right: -150, top: -150, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400, borderRadius: "50%",
          left: -100, bottom: -100, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
         

            <Typography.Title style={{ color: NAVY, fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
              Start collecting rent with confidence
            </Typography.Title>
          <Form
            size="large"
            form={form}
            onFinish={(values) => navigateToAuth("rent-manager", values.phone)} 
            style={{ maxWidth: 480, margin: "0 auto", marginBottom: 24 }}>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Please enter your phone number" }]}
            >
              <Input
                type="tel"
                placeholder="+255 (0) 712 345 678"
                size="large"
                prefix={<span style={{ color: NAVY, fontWeight: 700 }}>+255</span>}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                style={{ background: AMBER, borderColor: AMBER, color: NAVY, fontWeight: 700, height: 48, padding: "0 28px", fontSize: 15 }}>
                Next <ArrowRightOutlined />
              </Button>
            </Form.Item>
          </Form>
          <Paragraph style={{ fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
            <em>Join 2,400+ Tanzanian landlords already using tante to collect rent effortlessly,</em>
          </Paragraph>
         

        </div>
      </section>

    </div>
  );
}
