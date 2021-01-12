import * as React from 'react';
import Button from '..';

export default () => {
  return (
    <div style={{ padding: '0 24px' }}>
      <h3>icon</h3>
      <Button
        icon={
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg"
            alt=""
          />
        }
      >
        icon img
      </Button>
      <br />
    </div>
  );
};
