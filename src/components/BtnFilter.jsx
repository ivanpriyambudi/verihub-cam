import { useState } from "react";
import { Button, Flex } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setShowAll } from "../features/filter";

function BtnFilter() {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();
  const filterUse = useSelector((state) => state.filter.useFilter);
  const filterList = useSelector((state) => state.filter.filterList);

  function changeArrow(next) {
    const isLast = filterUse === filterList.length - 1;
    const isFirst = filterUse === 0;
    if (next) {
      isLast ? dispatch(setFilter(0)) : dispatch(setFilter(filterUse + 1));
    } else {
      isFirst
        ? dispatch(setFilter(filterList.length - 1))
        : dispatch(setFilter(filterUse - 1));
    }
  }

  return (
    <>
      <Flex style={{width: '100%'}} gap="middle" align="center" justify="center">
        <Button
          onClick={() => changeArrow(false)}
          size="large"
          type="primary"
          icon={<LeftOutlined />}
        />
        <Button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          size="large"
          type="primary"
          style={{ width: "200px" }}
          onClick={() => dispatch(setShowAll(true))}
        >
          <span style={{ textTransform: "capitalize" }}>
            {hover ? "More Effects..." : filterList[filterUse] || "Normal"}
          </span>
        </Button>
        <Button
          onClick={() => changeArrow(true)}
          size="large"
          type="primary"
          icon={<RightOutlined />}
        />
      </Flex>
    </>
  );
}

export default BtnFilter;
