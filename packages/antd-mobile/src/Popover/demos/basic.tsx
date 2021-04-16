import React, { FC } from 'react';
import { useSetState } from 'ahooks';
import { NavBar, Icon, Popover } from '@alitajs/antd-mobile';

interface PopoverExmpleProps {}

const Item = Popover.Item;
const myImg = (src) => (
  <img
    src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
    className="am-icon am-icon-xs"
    alt=""
  />
);

const PopoverExmple: FC<PopoverExmpleProps> = (props) => {
  const [state, setState] = useSetState({
    visible: true,
    selected: '',
  });
  const onSelect = (opt) => {
    console.log(opt);

    // console.log(opt.props.value);
    setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  const handleVisibleChange = (visible) => {
    setState({
      visible,
    });
  };
  return (
    <div>
      <NavBar
        mode="light"
        rightContent={
          <Popover
            mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={state.visible}
            overlay={[
              <Item
                key="4"
                value="scan"
                icon={myImg('tOtXhkIWzwotgGSeptou')}
                data-seed="logId"
              >
                Scan
              </Item>,
              <Item
                key="5"
                value="special"
                icon={myImg('PKAgAqZWJVNwKsAJSmXd')}
                style={{ whiteSpace: 'nowrap' }}
              >
                My Qrcode
              </Item>,
              <Item
                key="6"
                value="button ct"
                icon={myImg('uQIYTFeRrjPELImDRrPt')}
              >
                <span style={{ marginRight: 5 }}>Help</span>
              </Item>,
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={handleVisibleChange}
            onSelect={onSelect}
          >
            <div
              style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
        NavBar
      </NavBar>
    </div>
  );
};

export default PopoverExmple;
