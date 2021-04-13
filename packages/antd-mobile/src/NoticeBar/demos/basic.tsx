import React, { FC } from 'react';
import { NoticeBar, WhiteSpace, Icon } from '@alitajs/antd-mobile';

interface NoticeBarExmpleProps {}

const NoticeBarExmple: FC<NoticeBarExmpleProps> = (props) => {
  return (
    <div>
      <WhiteSpace size="lg" />
      <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will
        be delayed during National Day.
      </NoticeBar>
      <WhiteSpace size="lg" />
      <NoticeBar mode="link" onClick={() => alert('1')}>
        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will
        be delayed during National Day.
      </NoticeBar>
      <WhiteSpace size="lg" />
      <NoticeBar mode="closable" icon={null}>
        Remove the default icon.
      </NoticeBar>
      <WhiteSpace size="lg" />
      <NoticeBar
        mode="closable"
        icon={<Icon type="check-circle-o" size="xxs" />}
      >
        Customized icon.
      </NoticeBar>
      <WhiteSpace size="lg" />
      <NoticeBar
        mode="closable"
        action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}
      >
        Closable demo for `actionText`.
      </NoticeBar>
      <WhiteSpace size="lg" />
      <NoticeBar mode="link" action={<span>去看看</span>}>
        Link demo for `actionText`.
      </NoticeBar>
    </div>
  );
};

export default NoticeBarExmple;
