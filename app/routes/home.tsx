import type { Route } from "./+types/home";
import { Col, Progress, Row } from 'antd';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tante App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <>
        <Row>
          <Col span={24} style={{ textAlign: 'center'}}>
            <h2>Welcome to Tante App</h2>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'center'}}>
            <h1>Your one-stop solution for property management.</h1>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={12} style={{ textAlign: 'center' }}>
                 <Progress
                    type="dashboard"
                    steps={10}
                    percent={10}
                    trailColor="rgba(0, 0, 0, 0.06)"
                    strokeWidth={20}
                  />
          </Col>
        </Row>
      </>)
        ;
}
