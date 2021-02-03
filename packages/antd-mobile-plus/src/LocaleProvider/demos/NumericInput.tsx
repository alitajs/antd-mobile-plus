import * as React from 'react';
import { Button } from 'antd-mobile';
import { en_US, zh_CN } from '@alitajs/languages';
import LocaleProvider from '..';
import DemoComponent from '../../DemoComponent';

export default () => {
  const [lang, setLang] = React.useState(zh_CN);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          if (lang === zh_CN) {
            setLang(en_US);
          } else {
            setLang(zh_CN);
          }
        }}
      >
        点击切换
      </Button>
      <h3>当前: {lang.locale}</h3>
      <LocaleProvider value={lang}>
        <DemoComponent />
      </LocaleProvider>
    </>
  );
};
