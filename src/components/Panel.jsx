import { useState } from "react";
import { Button, Checkbox, Dropdown, Flex } from "antd";
import {
  SettingOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import BtnFilter from "./BtnFilter";
import BtnFilterArrow from "./BtnFilterArrow";
import { useDispatch, useSelector } from "react-redux";
import { setUseConfig } from '../features/config'

function Panel() {
  const [openMenu, setOpenMenu] = useState(false);

  const configList = useSelector((state) => state.config.configList);
  const config = useSelector((state) => state.config.useConfig);
  const showAll = useSelector((state) => state.filter.showAll);
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
              dispatch(setUseConfig([...config, el]))
            } else {
              dispatch(setUseConfig(config.filter((ex) => ex !== el)))
            }
          }}
        >
          <span style={{ textTransform: "capitalize" }}>{el}</span>
        </Checkbox>
      ),
    };
  });

  return (
    <>
    {
      !showAll ?
      <Flex style={{ width: '100%' }} gap="middle" align="center" justify="space-around">
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
          <Button size="large" type="primary" icon={<CameraOutlined />} />
        </div>
      </Flex>
    : <BtnFilterArrow />}
    </>
  );
}

export default Panel;
