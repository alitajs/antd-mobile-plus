import React, { FC } from 'react';
import {
  Pagination,
  LocaleProvider,
  List,
  DatePicker,
  WhiteSpace,
  WingBlank,
  InputItem,
  Picker,
  SearchBar,
} from '@alitajs/antd-mobile';
import { useSetState } from 'ahooks';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import ruRU from 'antd-mobile/lib/locale-provider/ru_RU';

const maxDate = new Date(2018, 11, 3, 22, 0);
const minDate = new Date(2015, 7, 6, 8, 30);

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

const Page = () => (
  <div>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
      <DatePicker
        mode="date"
        title="Select date"
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow="horizontal">datePicker</List.Item>
      </DatePicker>
      <Picker data={seasons} cascade={false}>
        <List.Item arrow="horizontal">picker</List.Item>
      </Picker>
    </List>
    <WhiteSpace />
    <SearchBar placeholder="Search" showCancelButton />
    <WhiteSpace />
    <InputItem type="money" placeholder="money input" />
  </div>
);

interface LocaleProviderExmpleProps {}

const LocaleProviderExmple: FC<LocaleProviderExmpleProps> = (props) => {
  const [state, setState] = useSetState({
    locale: 'English',
  });
  const onChange = (value) => {
    setState({
      locale: value[0],
    });
  };

  const { locale } = state;
  const languages = [
    {
      value: '中国',
      label: '中国',
      language: undefined,
    },
    {
      value: 'English',
      label: 'English',
      language: enUS,
    },
    {
      value: 'Русский',
      label: 'Русский',
      language: ruRU,
    },
  ];
  const currentLocale = languages.find((item) => item.value === locale)!
    .language;

  return (
    <WingBlank>
      <Picker data={languages} onChange={onChange} cols={1} value={[locale]}>
        <List.Item arrow="horizontal">Choose language</List.Item>
      </Picker>
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <LocaleProvider locale={currentLocale}>
        <Page />
      </LocaleProvider>
    </WingBlank>
  );
};

export default LocaleProviderExmple;
