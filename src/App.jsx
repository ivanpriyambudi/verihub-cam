import { Col, Row } from "antd";
import Panel from "./components/Panel";
import CWebcam from "./components/CWebcam";
import { useRef } from "react";
import { setResult } from "./features/result";
import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";

function App() {
  const dispatch = useDispatch();
  const webcamRef = useRef(null);
  const taked = useSelector((state) => state.result.data);

  async function convertHtmlToWebPBase64(htmlContent) {
    const canvas = await html2canvas(htmlContent);
    return canvas.toDataURL()
  }

  const onTake = async () => {
    console.log(webcamRef)
    const data = await convertHtmlToWebPBase64(webcamRef.current)
    dispatch(setResult(data));
  };

  const onSave = () => {
    if (taked) {
      const canvas = document.createElement("canvas");
      const img = new Image();
      img.src = taked;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0, img.width, img.height);

        const jpgDataUrl = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = jpgDataUrl;
        link.download = "image.jpg";
        link.click();
      };
    }
  };

  return (
    <>
      <Row justify="center" align="middle" gutter={0}>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          {!taked ? <CWebcam ref={webcamRef} /> : <img src={taked} />}
        </Col>
        <Col className="c-panel" xs={24} sm={24} md={24} lg={12} xl={12}>
          <Panel onTake={() => onTake()} onSave={() => onSave()} />
        </Col>
      </Row>
    </>
  );
}

export default App;
