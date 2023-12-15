import { useState } from "react";
import { Button, Checkbox, Dropdown, Flex } from "antd";
import {
  CameraOutlined,
  DownOutlined,
  LeftOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setUseConfig } from "../features/config";
import PropTypes from "prop-types";

import BtnFilter from "./BtnFilter";
import BtnFilterArrow from "./BtnFilterArrow";
import { setResult } from "../features/result";

function Panel(props) {
  const [openMenu, setOpenMenu] = useState(false);

  const configList = useSelector((state) => state.config.configList);
  const config = useSelector((state) => state.config.useConfig);
  const showAll = useSelector((state) => state.filter.showAll);
  const taked = useSelector((state) => state.result.data) !== null;
  const dispatch = useDispatch();

  function changeConfig(e, x) {
    if (x.source === "trigger" && !e) setOpenMenu(false);
  }

  const items = configList.map((el, index) => {
    return {
      key: index,
      label: (
        <Checkbox
          checked={config.includes(el)}
          onChange={($event) => {
            if ($event.target.checked) {
              dispatch(setUseConfig([...config, el]));
            } else {
              dispatch(setUseConfig(config.filter((ex) => ex !== el)));
            }
          }}
        >
          <span style={{ textTransform: "capitalize" }}>{el}</span>
        </Checkbox>
      ),
    };
  });

  const onTake = () => {
    props.onTake();
  };

  const onSave = () => {
    props.onSave();
  };

  return (
    <>
      {!taked ? (
        !showAll ? (
          <Flex
            style={{ width: "100%" }}
            gap="middle"
            align="center"
            justify="space-around"
          >
            <div>
              <Dropdown
                menu={{ items }}
                placement="top"
                trigger={["click"]}
                onOpenChange={changeConfig}
                open={openMenu}
              >
                <Button
                  onClick={() => setOpenMenu(!openMenu)}
                  size="large"
                  type="primary"
                  icon={<SettingOutlined />}
                />
              </Dropdown>
            </div>
            <div>
              <BtnFilter />
            </div>
            <div>
              <Button
                onClick={() => onTake()}
                size="large"
                type="primary"
                icon={<CameraOutlined />}
              />
            </div>
          </Flex>
        ) : (
          <BtnFilterArrow />
        )
      ) : (
        <Flex
          style={{ width: "100%" }}
          gap="middle"
          align="center"
          justify="space-around"
        >
          <div>
            <Button
              onClick={() => dispatch(setResult(null))}
              size="large"
              type="primary"
              icon={<LeftOutlined />}
            >
              Back
            </Button>
          </div>
          <div>
            <Button size="large" type="primary">
              Google Photos
            </Button>
          </div>
          <div>
            <Button
              onClick={() => onSave()}
              size="large"
              type="primary"
              icon={<DownOutlined />}
            >
              Save
            </Button>
          </div>
        </Flex>
      )}
    </>
  );
}

Panel.propTypes = {
  onTake: PropTypes.any,
  onSave: PropTypes.any,
};

export default Panel;
