import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import classnames from 'classnames';
import { EmptyType } from './PropsType';
import { TypeList } from './assets/type';
import './index.less';

const prefixCls = 'alita-empty';
const Empty: FC<EmptyType> = ({
  type = 'normal',
  icon,
  title,
  renderFooter,
  className,
  style,
}) => {
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
  const TitleView = ({ text }: { text: string }) => {
    return <div className={`${prefixCls}-text`}>{text}</div>;
  };
  return (
    <div
      className={classnames(prefixCls, {
        [`${className}`]: !!className,
      })}
      style={style}
    >
      <IconView />
      <TitleView text={title ?? TypeList[type].text} />
      {renderFooter}
    </div>
  );
};

Empty.displayName = 'Empty';
export default withError(Empty);
