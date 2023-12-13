import { Button, Flex } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setIndexShowAll } from "../features/filter";

function BtnFilter() {
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        style={{ width: "100%" }}
        gap="middle"
        align="center"
        justify="center"
      >
        <Button
          onClick={() => dispatch(setIndexShowAll('prev'))}
          size="large"
          type="primary"
          icon={<UpOutlined />}
        />
        <Button
          onClick={() => dispatch(setIndexShowAll('next'))}
          size="large"
          type="primary"
          icon={<DownOutlined />}
        />
      </Flex>
    </>
  );
}

export default BtnFilter;
