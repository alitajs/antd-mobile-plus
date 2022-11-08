import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import Flex from 'antd-mobile-v2/lib/flex';
import { HeaderFullViewToolItemType, HeaderFullViewType } from './PropsType';
import './index.less';

const prefixCls = 'alita-headerfullview';
const HeaderFullView: FC<HeaderFullViewType> = (props) => {
  const {
    icon = '',
    tools = [],
    infos = [],
    title = '',
    extra = <></>,
  } = props;

  const log = useTracker(HeaderFullView.displayName, {});
  const Icon = (): React.ReactElement => {
    let Img: React.ReactElement = <i className={`${prefixCls}-i`}></i>;
    const isSrc = typeof icon === 'string';
    if (icon && isSrc) {
      Img = <img className={`${prefixCls}-img`} src={icon as string} alt="" />;
    }
    if (React.isValidElement(icon)) {
      Img = icon;
    }
    return <div className={`${prefixCls}-icon`}>{Img}</div>;
  };

  const FootItem = ({
    id,
    text,
    onClick,
    icon,
  }: HeaderFullViewToolItemType) => (
    <Flex
      direction="column"
      onClick={() => {
        log(`onClick: ${id}`);
        onClick && onClick();
      }}
    >
      <div className={`${prefixCls}-footer-bg`}>
        <img src={icon} alt="" />
      </div>
      <div className={`${prefixCls}-footer-text`}>{text}</div>
    </Flex>
  );

  const MainView = (
    <Flex>
      <Icon />
      <Flex.Item className={`${prefixCls}-info`}>
        <div className={`${prefixCls}-info-title`}>{title}</div>
        {infos.map((info) => (
          <div className={`${prefixCls}-info-body`} key={info.id}>
            {info.label}
          </div>
        ))}
      </Flex.Item>
    </Flex>
  );

  const FooterView = (
    <Flex direction="row" className={`${prefixCls}-footer`}>
      {tools.map((t) => (
        <Flex.Item>
          <FootItem key={t.id} {...t} />
        </Flex.Item>
      ))}
    </Flex>
  );

  return (
    <div className={prefixCls}>
      <Flex className={`${prefixCls}-extra`} justify="end">
        {extra}
      </Flex>
      <div className={`${prefixCls}-body`}>
        {MainView}
        {FooterView}
      </div>
    </div>
  );
};

HeaderFullView.displayName = 'HeaderFullView';
export default withError(HeaderFullView);
