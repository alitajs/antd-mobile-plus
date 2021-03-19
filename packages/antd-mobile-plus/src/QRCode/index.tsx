/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-19 15:21:12
 */
import React, { FC, useState, useEffect } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import QRCodes from "qrcode";
import { QRCodeType } from './PropsType';
import './index.less';

const prefixCls = 'alita-qrcode';

const QRCode: FC<QRCodeType> = (props) => {
  const {
    content,
  } = props;
  const [url, setUrl] = useState('');
  const [flag, setFlag] = useState(false);

  const log = useTracker(QRCode.displayName, {});

  useEffect(() => {
    if (content) {
      QRCodes.toDataURL(content)
        .then((url: string) => {
          log('generateQRcode');
          setUrl(url);
          setFlag(true);
        })
        .catch(() => {
          setFlag(false);
        });
    } else {
      setFlag(false);
    }
  }, []);

  return (
    <div className={prefixCls}>
      {flag && <img src={url} alt="" />}
    </div>
  );
};

QRCode.displayName = 'QRCode';

export default withError(QRCode);
