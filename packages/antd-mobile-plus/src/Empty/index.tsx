import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import classnames from 'classnames';
import { EmptyType } from './PropsType';
import { TypeList } from './assets/type';
import './index.less';

const prefixCls = 'alita-empty';
const Empty: FC<EmptyType> = ({
  type = 'nomal',
  icon,
  title,
  renderHeader,
  renderFooter,
  className,
  style,
  onClick,
}) => {
  const log = useTracker(Empty.displayName, {});
  const IconView = () => {
    return icon ? (
      <img className={`${prefixCls}-icon`} src={icon} alt="" />
    ) : (
      <i
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(
            TypeList[type].icon,
          )}")`,
        }}
        className={classnames({
          [`${prefixCls}-icon`]: true,
          [`${prefixCls}-i`]: true,
        })}
      ></i>
    );
  };
  const TitlView = ({ text }: { text: string }) => {
    return <div className={`${prefixCls}-text`}>{text}</div>;
  };
  return (
    <div
      className={classnames(prefixCls, {
        [`${className}`]: !!className,
      })}
      onClick={() => {
        if (onClick) {
          log('onClick');
          onClick();
        }
      }}
      style={style}
    >
      {renderHeader}
      <IconView />
      <TitlView text={title ?? TypeList[type].text} />
      {renderFooter}
    </div>
  );
};

Empty.displayName = 'Empty';
export default withError(Empty);
