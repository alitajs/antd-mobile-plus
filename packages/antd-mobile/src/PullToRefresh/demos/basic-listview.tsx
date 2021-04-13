import React, { FC, useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { addClass, removeClass } from 'dom-helpers';
import { PullToRefresh, ListView, Button } from '@alitajs/antd-mobile';
import { useSetState } from 'ahooks';

interface PullToRefreshExmpleProps {}

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: "McDonald's invites you",
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${pIndex * NUM_ROWS + i}`);
  }
  return dataArr;
}

const PullToRefreshExmple: FC<PullToRefreshExmpleProps> = (props) => {
  const lv = useRef(null);
  const rData = useRef<string[]>([]);
  const [state, setState] = useSetState({
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    refreshing: true,
    isLoading: true,
    height: document.documentElement.clientHeight,
    useBodyScroll: false,
  });
  useEffect(() => {
    const hei = state.height - ReactDOM.findDOMNode(lv.current)!.offsetTop;
    setTimeout(() => {
      rData.current = genData();
      setState({
        dataSource: state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 1500);
    return () => {
      // 由于容器原因 需要去除overflow:hidden;
    };
  }, []);

  useMemo(() => {
    if (state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [state.useBodyScroll]);

  const onRefresh = () => {
    setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      rData.current = genData();
      setState({
        dataSource: state.dataSource.cloneWithRows(rData.current),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  const onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (state.isLoading && !state.hasMore) {
      return;
    }
    console.log('reach end', event);
    setState({ isLoading: true });
    setTimeout(() => {
      rData.current = [...rData.current, ...genData(++pageIndex)];
      setState({
        dataSource: state.dataSource.cloneWithRows(rData.current),
        isLoading: false,
      });
    }, 1000);
  };

  const separator = (sectionID, rowID) => (
    <div
      key={`${sectionID}-${rowID}`}
      style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
    />
  );
  let index = data.length - 1;
  const row = (rowData, sectionID, rowID) => {
    if (index < 0) {
      index = data.length - 1;
    }
    const obj = data[index--];
    return (
      <div
        key={rowID}
        style={{
          boxSizing: 'border-box',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            height: '50px',
            lineHeight: '50px',
            color: '#888',
            fontSize: '18px',
            borderBottom: '1px solid #ddd',
            width: 'auto',
          }}
        >
          {obj.title}
        </div>
        <div
          style={{
            display: 'flex',
            boxSizing: 'border-box',
            width: 'auto',
          }}
        >
          <img style={{ height: '63px', width: '63px' }} src={obj.img} alt="" />
          <div style={{ display: 'inline-block' }}>
            <div
              style={{
                marginBottom: '8px',
                color: '#000',
                fontSize: '16px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '250px',
                width: 'auto',
              }}
            >
              {obj.des}-{rowData}
            </div>
            <div style={{ fontSize: '16px' }}>
              <span style={{ fontSize: '30px', color: '#FF6E27' }}>
                {rowID}
              </span>{' '}
              元/任务
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Button
        style={{ margin: '30px 15px' }}
        inline
        onClick={() => setState({ useBodyScroll: !state.useBodyScroll })}
      >
        {state.useBodyScroll ? 'useBodyScroll' : 'partial scroll'}
      </Button>
      <ListView
        key={state.useBodyScroll ? '0' : '1'}
        ref={lv}
        dataSource={state.dataSource}
        renderHeader={() => <span>Pull to refresh</span>}
        renderFooter={() => (
          <div style={{ padding: 30, textAlign: 'center' }}>
            {state.isLoading ? 'Loading...' : 'Loaded'}
          </div>
        )}
        renderRow={row}
        renderSeparator={separator}
        useBodyScroll={state.useBodyScroll}
        style={
          state.useBodyScroll
            ? {}
            : {
                height: state.height,
                border: '1px solid #ddd',
                margin: '5px 0',
              }
        }
        pullToRefresh={
          <PullToRefresh refreshing={state.refreshing} onRefresh={onRefresh} />
        }
        onEndReached={onEndReached}
        pageSize={5}
      />
    </div>
  );
};

export default PullToRefreshExmple;
