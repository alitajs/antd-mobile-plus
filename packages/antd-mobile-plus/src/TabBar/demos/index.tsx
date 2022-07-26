import React, { FC } from 'react';
import { Badge, TabBar } from '@alitajs/antd-mobile-plus';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom';
import homeSvg from './assets/home.svg';
import homeActiveSvg from './assets/homeActive.svg';
import utilitySvg from './assets/utility.svg';
import utilityActiveSvg from './assets/utilityActive.svg';
import mineSvg from './assets/mine.svg';
import mineActiveSvg from './assets/mineActive.svg';
import './index.less';

const Bottom: FC = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: (active: boolean) => {
      if(active) {
        return <img alt='' src={homeActiveSvg}  className='icon'/>;
      }
       return <img alt='' src={homeSvg} className='icon'/>;
      }
    },
    {
      key: '/todo',
      title: '功能',
      icon:  (active: boolean) => {
        if(active) {
          return <img alt='' src={utilityActiveSvg}  className='icon'/>;
        }
         return <img alt='' src={utilitySvg} className='icon'/>;
        }
    },
    {
      key: '/me',
      title: '我的',
      icon:  (active: boolean) => {
        if(active) {
          return <img alt='' src={mineActiveSvg}  className='icon'/>;
        }
         return <img alt='' src={mineSvg} className='icon'/>;
        },
      badge: {'content':'99', 'style':{ '--top': '20%', '--color': 'green'}},
    },
  ]

  return (
    <TabBar safeArea activeKey={pathname} onChange={(value: any) => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
      ))}
    </TabBar>
  )
}

export default () => {
  return (
    <Router initialEntries={['/home']}>
      <div className="app">
        <div className="top">
          配合路由使用
        </div>
        <div className="body">
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/todo'>
              <Todo />
            </Route>
            <Route exact path='/me'>
              <PersonalCenter />
            </Route>
          </Switch>
        </div>
        <div className="bottom">
          <Bottom />
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return <div>首页</div>
}

function Todo() {
  return <div>我的功能</div>
}

function PersonalCenter() {
  return <div>个人中心</div>
}
