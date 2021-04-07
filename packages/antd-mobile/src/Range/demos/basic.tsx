import React from 'react';
import { Range, WingBlank, WhiteSpace } from '@alitajs/antd-mobile';

const App = () => {
  const log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  };
  return (
    <div className="am-slider-example">
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="sub-title">Basic range</p>
        <Range
          style={{ marginLeft: 30, marginRight: 30 }}
          min={0}
          max={20}
          defaultValue={[3, 10]}
          onChange={log('change')}
          onAfterChange={log('afterChange')}
        />
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="sub-title">Disabled range</p>
        <Range
          style={{ marginLeft: 30, marginRight: 30 }}
          min={0}
          max={20}
          defaultValue={[3, 10]}
          onChange={log('change')}
          onAfterChange={log('afterChange')}
          disabled
        />
      </WingBlank>
      <WhiteSpace size="lg" />
      <WingBlank size="lg">
        <p className="sub-title">Range with customized style</p>
        <Range
          style={{ marginLeft: 30, marginRight: 30 }}
          min={0}
          max={20}
          defaultValue={[3, 10]}
          onChange={log('change')}
          onAfterChange={log('afterChange')}
          trackStyle={[
            { backgroundColor: 'red' },
            { backgroundColor: 'green' },
          ]}
          handleStyle={[
            { backgroundColor: 'yellow' },
            { backgroundColor: 'gray' },
          ]}
          railStyle={{ backgroundColor: 'black' }}
        />
      </WingBlank>
    </div>
  );
};

export default App;
