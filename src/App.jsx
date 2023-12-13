import { Col, Row } from "antd";
import Panel from "./components/Panel";
import CWebcam from "./components/CWebcam";

function App() {
  return (
    <>
      <Row
          justify="center"
          align="middle"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          <Col span={12}>
            <CWebcam />
            <Panel />
          </Col>
        </Row>
    </>
  );
}

export default App;
