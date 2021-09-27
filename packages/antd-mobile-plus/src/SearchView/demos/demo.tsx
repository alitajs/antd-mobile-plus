import React, { FC, useState, useRef, useEffect } from 'react';
import { SearchView } from '@alitajs/antd-mobile-plus';
import { setTracker } from '@alitajs/tracker';

import './index.less';

interface DemoProps {}

const Demo: FC<DemoProps> = (props) => {
  setTracker({
    log: (a, b, c) => {
      console.log(a, b, c);
    },
  });
  const [value, setValue] = useState("393");
  const [filterValue, setFilterValue] = useState('02');
  const [filterValue01, setFilterValue01] = useState();
  const scrollElement = useRef<HTMLDivElement>(null);
  const [scrollEle, setScrollEle] = useState<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (scrollElement.current) {
      setScrollEle(scrollElement.current);
    }
    return () => {};
  }, []);
  return (
    <div style={{ height: '100vh', overflow: 'scroll' }} ref={scrollElement}>
      <div style={{ height: '120vh' }}>
        <SearchView
          placeholder="请输入文字"
          scrollElement={scrollEle}
          filterData={[
            { label: '竣工', value: '01' },
            { label: '测试02测试02', value: '02' },
            { label: '测试03', value: '03' },
            { label: '测试04', value: '04' },
            { label: '测试05', value: '05' },
            { label: '测试06', value: '06' },
            { label: '测试08', value: '07' },
            { label: '测试10', value: '08' },
          ]}
          filterValue={filterValue}
        />
        <div className={'search-view-demo'}></div>
        <SearchView
          scrollElement={scrollEle}
          maxHeight="70vh"
          placeholder="请输入文字"
          value={value}
          filterData={[
            { label: '竣工', value: '01' },
            { label: '测试02测试02', value: '02' },
            { label: '测试03', value: '03' },
            { label: '测试04', value: '04' },
            { label: '测试05', value: '05' },
            { label: '测试06', value: '06' },
            { label: '测试08', value: '07' },
            { label: '测试10', value: '08' },
            { label: '测试11', value: '09' },
            { label: '测试12', value: '010' },
            { label: '测试13', value: '011' },
          ]}
          filterValue={filterValue01}
          showLeft={true}
          onChange={(v) => {
            console.log(v);
            setValue(v);
          }}
          onFilterChange={(e) => {
            console.log('onFilterChange：', e);
            setFilterValue01(e.value);
          }}
          onFilterSelected={(e) => {
            console.log('onFilterSelected：', e);
          }}
          onSearch={(v: string) => {
            console.log('onSearch:', v);
          }}
          onFocus={(v: string) => {
            console.log('onFocus:', v);
          }}
          onBlur={(v: string) => {
            console.log('onBlur:', v);
          }}
          type="number"
          showCancel={true}
        />

        <div className={'search-view-demo'}></div>
        <SearchView
          showCancel
          scrollElement={scrollEle}
          placeholder="自定义面板"
          showLeft={true}
          leftText={'可以修改text'}
          open={open}
          PopViewPanel={
            <div
              style={{ height: 400, backgroundColor: '#fff' }}
              onClick={() => {
                setOpen(false);
              }}
            >
              点击我关闭
            </div>
          }
          onSearch={(v: string) => {
            console.log('onSearch:', v);
          }}
          onToggoleHandle={(on) => {
            setOpen(on);
            console.log('onToggoleHandle:', on);
          }}
        />
      </div>
    </div>
  );
};

export default Demo;
