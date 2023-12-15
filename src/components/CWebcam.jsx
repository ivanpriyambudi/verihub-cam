import Webcam from "react-webcam";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setShowAll } from "../features/filter";
import { forwardRef } from "react";

function CWebcam(_props, ref) {
  const showAll = useSelector((state) => state.filter.showAll);
  const filterList = useSelector((state) => state.filter.filterList);
  const filterGrid = useSelector((state) => state.filter.filterGrid);
  const indexShowAll = useSelector((state) => state.filter.indexShowAll);
  const useFilter = useSelector((state) =>
    state.filter.filterList.find(
      (el, index) => index === state.filter.useFilter
    )
  );

  const dispatch = useDispatch();
  // const mainWebcam = <Webcam ref={ref} style={{ width: "100%" }} />

  function changeFilter(item) {
    const filterIndex = filterList.findIndex((el) => el === item);
    dispatch(setFilter(filterIndex));
    dispatch(setShowAll(false));
  }

  const frameUsed = () => {
    // 2
    if (useFilter === "mirrorleft") {
      return (
        <Row gutter={0} style={{ width: "100%" }}>
          <Col style={{ position: "relative", overflow: "hidden" }} span={24}>
            <div
              style={{
                width: "50%",
                overflow: "hidden",
                height: "100%",
                position: "absolute",
              }}
            >
              <Webcam
                mirrored={true}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                width: "50%",
                overflow: "hidden",
                height: "100%",
                position: "absolute",
                right: "0",
                transform: "rotate(0deg) scaleX(-1)",
              }}
            >
              <Webcam
                mirrored={true}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      );
    }

    // 3
    if (useFilter === "mirrorright") {
      return (
        <Row gutter={0} style={{ width: "100%" }}>
          <Col style={{ position: "relative", overflow: "hidden" }} span={24}>
            <div
              style={{
                width: "50%",
                overflow: "hidden",
                height: "100%",
                position: "absolute",
              }}
            >
              <Webcam
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                width: "50%",
                overflow: "hidden",
                height: "100%",
                position: "absolute",
                right: "0",
                transform: "rotate(0deg) scaleX(-1)",
              }}
            >
              <Webcam
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      );
    }

    // 4
    if (useFilter === "mirrortop") {
      return (
        <Row gutter={0} style={{ width: "100%" }}>
          <Col style={{ position: "relative", overflow: "hidden" }} span={24}>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
              }}
            >
              <Webcam mirrored={true} style={{ width: "100%" }} />
            </div>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
                bottom: "0",
                transform: "rotate(180deg) scaleX(-1)",
              }}
            >
              <Webcam mirrored={true} style={{ width: "100%" }} />
            </div>
          </Col>
        </Row>
      );
    }

    // 5
    if (useFilter === "mirrorbottom") {
      return (
        <Row gutter={0} style={{ width: "100%" }}>
          <Col style={{ position: "relative", overflow: "hidden" }} span={24}>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
                top: "0",
                transform: "rotate(180deg) scaleX(-1)",
              }}
            >
              <Webcam
                mirrored={true}
                style={{
                  width: "100%",
                  transformOrigin: "bottom",
                  transform: "scale(1.5) translateY(-80px)",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
                bottom: "0",
              }}
            >
              <Webcam
                mirrored={true}
                style={{
                  width: "100%",
                  transformOrigin: "bottom",
                  transform: "scale(1.5) translateY(-80px)",
                }}
              />
            </div>
          </Col>
        </Row>
      );
    }

    // 6
    if (useFilter === "mirrorquad") {
      return (
        <Row gutter={0} style={{ width: "100%" }}>
          <Col style={{ position: "relative", overflow: "hidden" }} span={24}>
            <div
              style={{
                width: "50%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
                left: "0",
                transform: "rotate(180deg) scaleX(-1)",
              }}
            >
              <Webcam
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                width: "50%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
                right: "0",
                transform: "rotate(180deg) scaleX(-1)",
              }}
            >
              <Webcam
                mirrored={true}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div
              style={{
                width: "50%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
                bottom: "0",
                left: "0",
              }}
            >
              <Webcam
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                width: "50%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
                bottom: "0",
                right: "0",
              }}
            >
              <Webcam
                mirrored={true}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      );
    }

    // 7
    if (useFilter === "upsidedown") {
      return (
        <Row gutter={0} style={{ width: "100%" }}>
          <Col style={{ position: "relative", overflow: "hidden" }} span={24}>
            <Webcam
              mirrored={true}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transform: "rotate(180deg) scaleX(-1)",
              }}
            />
          </Col>
        </Row>
      );
    }

    // 8
    if (useFilter === "switch") {
      return (
        <Row gutter={0} style={{ width: "100%" }}>
          <Col style={{ position: "relative", overflow: "hidden" }} span={24}>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
                top: "0",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Webcam
                mirrored={true}
                style={{
                  width: "100%",
                  transformOrigin: "center bottom",
                  transform: "translateY(-5%)",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                height: "50%",
                position: "absolute",
                bottom: "0",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Webcam
                style={{
                  width: "100%",
                  transformOrigin: "center bottom",
                }}
              />
            </div>
          </Col>
        </Row>
      );
    }

    // 9
    if (useFilter === "kaleidoscope") {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Row className="c-kaleidoscope">
            {[1, 2, 3].map((el, key) => (
              <Col
                className="tile-section"
                key={key}
                span={8}
                style={{
                  height: "100%",
                  display: "flex",
                  overflow: "hidden",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="tile">
                  <Webcam />
                </div>
                <div className="tile">
                  <Webcam />
                </div>
              </Col>
            ))}
          </Row>
          <Row
            className="c-kaleidoscope"
            style={{ transform: "rotate(180deg)" }}
          >
            {[1, 2, 3].map((el, key) => (
              <Col
                className="tile-section"
                key={key}
                span={8}
                style={{
                  height: "100%",
                  display: "flex",
                  overflow: "hidden",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="tile">
                  <Webcam />
                </div>
                <div className="tile">
                  <Webcam />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      );
    }

    // 10
    if (useFilter === "fragment") {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {Array.from({ length: 36 }, (_, index) => index + 1).map(
            (el, key) => {
              const index = key + 1;
              let clipPath = "";
              let transform = '';
              const mainSize = 16.6667
              const x = 3

              if (index <= 6) {
                transform = index%2==0 ? `scaleX(1.2) translateX(${x-key}%)` : 'unset';
                clipPath =
                  `polygon(${mainSize*key}% 0, ${mainSize*index}% 0, ${mainSize*index}% 16.6667%, ${mainSize*key}% 16.6667%)`;
              } else if (index > 6 && index <= 12) {
                const key2 = key - 6
                const index2 = key2 + 1
                transform = index%2==0 ? `scaleX(1.2) translateX(${x-key2}%)` : 'unset';
                clipPath =
                  `polygon(${mainSize*key2}% 16.6667%, ${mainSize*index2}% 16.6667%, ${mainSize*index2}% ${mainSize*2}%, ${mainSize*key2}% ${mainSize*2}%)`;
              } else if (index > 12 && index <= 18) {
                const key3 = key - 12
                const index3 = key3 + 1
                transform = index%2==0 ? `scaleX(1.2) translateX(${x-key3}%)` : 'unset';
                clipPath =
                  `polygon(${mainSize*key3}%  ${mainSize*2}%, ${mainSize*index3}% ${mainSize*2}%, ${mainSize*index3}%  ${mainSize*3}%, ${mainSize*key3}%  ${mainSize*3}%)`;
              } else if (index > 18 && index <= 24) {
                const key4 = key - 18
                const index4 = key4 + 1
                transform = index%2==0 ? `scaleX(1.2) translateX(${x-key4}%)` : 'unset';
                clipPath =
                `polygon(${mainSize*key4}% ${mainSize*3}%, ${mainSize*index4}% ${mainSize*3}%, ${mainSize*index4}%  ${mainSize*4}%, ${mainSize*key4}% ${mainSize*4}%)`;
              } else if (index > 24 && index <= 30) {
                const key5 = key - 24
                const index5 = key5 + 1
                transform = index%2==0 ? `scaleX(1.2) translateX(${x-key5}%)` : 'unset';
                clipPath =
                `polygon(${mainSize*key5}% ${mainSize*4}%, ${mainSize*index5}% ${mainSize*4}%, ${mainSize*index5}%  ${mainSize*5}%, ${mainSize*key5}% ${mainSize*5}%)`;
              } else {
                const key6 = key - 30
                const index6 = key6 + 1
                transform = index%2==0 ? `scaleX(1.2) translateX(${x-key6}%)` : 'unset';
                clipPath =
                `polygon(${mainSize*key6}% ${mainSize*5}%, ${mainSize*index6}% ${mainSize*5}%, ${mainSize*index6}%  ${mainSize*6}%, ${mainSize*key6}% ${mainSize*6}%)`;
              }

              return (
                <Webcam
                  key={`ite-${key}`}
                  style={{
                    width: "100%",
                    position: 'absolute',
                    clipPath: clipPath,
                    transformOrigin: 'top',
                    transform: transform,
                    zIndex: index%2==0 ? '1' : '2'
                  }}
                />
              );
            }
          )}
        </div>
      );
    }

    return <Webcam style={{ height: "100%" }} />;
  };

  return (
    <>
      {!showAll ? (
        <div ref={ref} className={`c-webcam-frame ${useFilter}`}>
          {frameUsed()}
        </div>
      ) : (
        <Row gutter={[8, 8]}>
          {filterGrid[indexShowAll].map((item, key) => (
            <Col key={key} xs={24} sm={24} md={8} lg={8} xl={8}>
              <div className={item}>
                <Webcam
                  style={{ width: "100%" }}
                  onClick={() => changeFilter(item)}
                  className={`c-pointer ${item}`}
                />
              </div>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

const ForwardedResult = forwardRef(CWebcam);

export default ForwardedResult;
