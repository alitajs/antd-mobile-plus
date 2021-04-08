import React, { FC } from 'react';
import { List, Checkbox, Flex } from '@alitajs/antd-mobile';

interface CheckboxExmpleProps {}
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const CheckboxExmple: FC<CheckboxExmpleProps> = (props) => {
  const data = [
    { value: 0, label: 'Ph.D.' },
    { value: 1, label: 'Bachelor' },
    { value: 2, label: 'College diploma' },
  ];
  const onChange = (val: number) => {
    console.log(val);
  };
  return (
    <div>
      <List renderHeader={() => 'CheckboxItem demo'}>
        {data.map((i) => (
          <CheckboxItem key={i.value} onChange={() => onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        <CheckboxItem
          key="disabled"
          data-seed="logId"
          disabled
          defaultChecked
          multipleLine
        >
          Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
        </CheckboxItem>
      </List>

      <Flex>
        <Flex.Item>
          <AgreeItem
            data-seed="logId"
            onChange={(e: any) => console.log('checkbox', e)}
          >
            Agree{' '}
            <a
              onClick={(e) => {
                e.preventDefault();
                alert('agree it');
              }}
            >
              agreement
            </a>
          </AgreeItem>
        </Flex.Item>
      </Flex>
    </div>
  );
};

export default CheckboxExmple;
