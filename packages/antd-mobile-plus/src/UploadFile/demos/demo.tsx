import React, { FC, useRef } from 'react';
import { Button } from 'antd-mobile';
import { UploadFile } from '@alitajs/antd-mobile-plus';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  const ref = useRef(null);
  return (
    <div style={{ padding: '0.2rem' }}>
      <Button
        type="primary"
        onClick={() => {
          console.log(ref.current.data());
        }}
      >
        获取附件列表
      </Button>
      <div
        style={{
          height: '1rem',
          textAlign: 'center',
          lineHeight: '1rem',
          fontSize: '0.3rem',
        }}
      >
        可编辑的
      </div>
      <UploadFile
        ref={ref}
        onRenderTips={(d) => {
          return (
            <div
              style={{
                color: '#999',
                padding: '0.16rem 0',
              }}
            >
              晓明, 2020-03-14
            </div>
          );
        }}
      />

      <div
        style={{
          height: '1rem',
          textAlign: 'center',
          lineHeight: '1rem',
          fontSize: '0.3rem',
        }}
      >
        不可编辑的
      </div>
      <UploadFile
        disable
        title="附件列表"
        initialData={[
          {
            name: '附件1',
            id: '01',
            type: 'doc',
          },
          {
            name: 'pdf文件',
            id: '02',
            type: 'pdf',
          },
          {
            name: 'excel文件',
            id: '03',
            type: 'excel',
          },
          {
            name: '图片文件',
            id: '04',
            type: 'image',
          },
        ]}
      />
    </div>
  );
};

export default Demo;
