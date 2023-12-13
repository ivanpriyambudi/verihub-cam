import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Webcam from "react-webcam";
import { setFilter, setShowAll } from "../features/filter";

function CWebcam() {
  const showAll = useSelector((state) => state.filter.showAll);
  const filterList = useSelector((state) => state.filter.filterList);
  const filterGrid = useSelector((state) => state.filter.filterGrid);
  const indexShowAll = useSelector((state) => state.filter.indexShowAll);
  const dispatch = useDispatch();

  function changeFilter(item) {
    const filterIndex = filterList.findIndex(el => el === item)
    dispatch(setFilter(filterIndex))
    dispatch(setShowAll(false))
  }

  return (
    <>
      {!showAll ? (
        <Webcam style={{ width: "100%" }} />
      ) : (
        <Row gutter={[8, 8]}>
          {filterGrid[indexShowAll].map((item, key) => (
            <Col key={key} xs={24} sm={24} md={8} lg={8} xl={8}>
              <Webcam
                style={{ width: "100%" }}
                onClick={() => changeFilter(item)}
                className="c-pointer"
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default CWebcam;
