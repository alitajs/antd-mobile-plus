import React, { FC } from 'react';
import { withError } from '@alitajs/tracker';
import classnames from 'classnames';
import { LightInfoCardType } from './PropsType';
import './index.less';

const prefixCls = 'alita-light-info-card';

const LightInfoCard: FC<LightInfoCardType> = (props) => {
  const {
    className,
    style,
    title,
    dataSource,
    imgPlacement,
    imgs,
    extra,
    onClickImg = () => {},
  } = props;

  const imgsSize = imgs && imgs.length;

  return (
    (
      <div className={`${prefixCls} ${className}`} style={style}>
        {
          <div className={imgPlacement !== undefined ? `${prefixCls}-content ${prefixCls}-content-${imgPlacement}` : `${prefixCls}-content`}>
            <ul className={`${prefixCls}-info`}>
              <span className={`${prefixCls}-title`}>{title}</span>
              {
                Array.isArray(dataSource)
                && dataSource.map((v, index) => (
                  <li key={index}>
                    <span>{v.title}：</span><span>{v.value}</span>
                  </li>
                ))
              }
            </ul>
            {
              imgPlacement !== undefined
              && (
                <div className={`${prefixCls}-img-container`}>
                  { imgs
                    ?
                    (
                      <React.Fragment>
                        {
                          <div
                            className={`${prefixCls}-img`}
                            onClick={() => onClickImg()}
                          >
                            {imgs[0]}
                          </div>
                        }
                        <div className={`${prefixCls}-img-info`}>{`${imgsSize}张`}</div>
                      </React.Fragment>
                    )
                    : (
                      <div className={`${prefixCls}-no-img`}>
                        <i
                          className={classnames(`${prefixCls}-icon`, `${prefixCls}-icon-user`)}
                        ></i>
                      </div>
                    )
                  }
                </div>
              )
            }
          </div>
        }
        {
          extra
          && <div className={`${prefixCls}-extra`}>
            {extra.map(item => (
              <span key={item} className={`${prefixCls}-extraItem`}>
                {item}
              </span>
            ))}
          </div>
        }
      </div>
    )
  );
};

LightInfoCard.displayName = 'LightInfoCard';

export default withError(LightInfoCard);
