import React, { FC } from 'react';
import { useSetState } from 'ahooks';
import { TabBar } from '@alitajs/antd-mobile';

interface TabBarExmpleProps {}

const TabBarExmple: FC<TabBarExmpleProps> = (props) => {
  const [state, setState] = useSetState({
    selectedTab: 'redTab',
    hidden: false,
    fullScreen: false,
  });
  const renderContent = (pageText) => {
    return (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        <a
          style={{
            display: 'block',
            marginTop: 40,
            marginBottom: 20,
            color: '#108ee9',
          }}
          onClick={(e) => {
            e.preventDefault();
            setState({
              hidden: !state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a
          style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            setState({
              fullScreen: !state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  };

  return (
    <div
      style={
        state.fullScreen
          ? { position: 'fixed', height: '100%', width: '100%', top: 0 }
          : { height: 400 }
      }
    >
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={state.hidden}
      >
        <TabBar.Item
          title="Life"
          key="Life"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selected={state.selectedTab === 'blueTab'}
          badge={1}
          onPress={() => {
            setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          {renderContent('Life')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          title="Koubei"
          key="Koubei"
          badge={'new'}
          selected={state.selectedTab === 'redTab'}
          onPress={() => {
            setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {renderContent('Koubei')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          title="Friend"
          key="Friend"
          dot
          selected={state.selectedTab === 'greenTab'}
          onPress={() => {
            setState({
              selectedTab: 'greenTab',
            });
          }}
        >
          {renderContent('Friend')}
        </TabBar.Item>
        <TabBar.Item
          icon={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
          }}
          selectedIcon={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
          }}
          title="My"
          key="my"
          selected={state.selectedTab === 'yellowTab'}
          onPress={() => {
            setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
          {renderContent('My')}
        </TabBar.Item>
      </TabBar>
    </div>
  );
};

export default TabBarExmple;
