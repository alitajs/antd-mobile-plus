import React from 'react';
import { Tabs, WhiteSpace } from '@alitajs/antd-mobile';

class Demo extends React.Component {
  renderContent = (tab) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px',
        backgroundColor: '#fff',
      }}
    >
      <p>Content of {tab.title}</p>
    </div>
  );

  render() {
    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];

    return (
      <div>
        <WhiteSpace />
        <Tabs
          tabs={tabs}
          renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={3} />}
        >
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default Demo;
