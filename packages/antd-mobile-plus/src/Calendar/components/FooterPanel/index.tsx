import React, { FC, useMemo } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';
import classNames from 'classnames';

interface FooterPanelProps {
  color?: React.CSSProperties['color'];
  confirmDisabledText?: string;
  confirmText?: string;
  showConfirm?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const prefixCls = 'alita-footerpanel';
const FooterPanel: FC<FooterPanelProps> = (props) => {
  const { color, children, disabled, onClick, className } = props;
  const styles: React.CSSProperties = useMemo(() => {
    if (color) {
      return {
        backgroundColor: color,
        color: '#fff',
      };
    }
    return {};
  }, [color, disabled]);
  return (
    <div className={prefixCls}>
      <div
        style={styles}
        className={classNames(`${prefixCls}-button`, {
          [`${className}`]: !!className,
          [`${prefixCls}-disabled`]: disabled,
        })}
        onClick={() => {
          if (!disabled && onClick) {
            onClick();
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};

FooterPanel.displayName = 'FooterPanel';
export default withError(FooterPanel);
