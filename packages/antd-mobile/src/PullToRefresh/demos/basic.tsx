import React, { FC, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, Button } from '@alitajs/antd-mobile';
import { useSetState } from 'ahooks';

interface PullToRefreshExmpleProps {}

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

const PullToRefreshExmple: FC<PullToRefreshExmpleProps> = (props) => {
  const ptr = useRef(null);
  const [state, setState] = useSetState({
    refreshing: false,
    down: true,
    height: document.documentElement.clientHeight,
    data: [],
  });
  useEffect(() => {
    const hei = state.height - ReactDOM.findDOMNode(ptr.current)!.offsetTop;
    setTimeout(
      () =>
        setState({
          height: hei,
          data: genData(),
        }),
      0,
    );
    return () => {};
  }, []);
  return (
    <div>
      <Button
        style={{ marginBottom: 15 }}
        onClick={() => setState({ down: !state.down })}
      >
        direction: {state.down ? 'down' : 'up'}
      </Button>
      <PullToRefresh
        damping={60}
        ref={ptr}
        style={{
          height: state.height,
          overflow: 'auto',
        }}
        indicator={state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={state.down ? 'down' : 'up'}
        refreshing={state.refreshing}
        onRefresh={() => {
          setState({ refreshing: true });
          setTimeout(() => {
            setState({ refreshing: false });
          }, 1000);
        }}
      >
        {state.data.map((i) => (
          <div key={i} style={{ textAlign: 'center', padding: 20 }}>
            {state.down ? 'pull down' : 'pull up'} {i}
          </div>
        ))}
      </PullToRefresh>
    </div>
  );
};

export default PullToRefreshExmple;
