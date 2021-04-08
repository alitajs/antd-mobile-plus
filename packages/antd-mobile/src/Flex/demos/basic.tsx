import React, { FC } from 'react';
import { Flex, WhiteSpace } from '@alitajs/antd-mobile';
import './index.less';

interface FlexExmpleProps {}

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
    Block
  </div>
);

const FlexExmple: FC<FlexExmpleProps> = (props) => {
  return (
    <div className="flex-container">
      <div className="sub-title">Basic</div>
      <Flex>
        <Flex.Item>
          <PlaceHolder />
        </Flex.Item>
        <Flex.Item>
          <PlaceHolder />
        </Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <Flex.Item>
          <PlaceHolder />
        </Flex.Item>
        <Flex.Item>
          <PlaceHolder />
        </Flex.Item>
        <Flex.Item>
          <PlaceHolder />
        </Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <Flex.Item>
          <PlaceHolder />
        </Flex.Item>
        <Flex.Item>
          <PlaceHolder />
        </Flex.Item>
        <Flex.Item>
          <PlaceHolder />
        </Flex.Item>
        <Flex.Item>
          <PlaceHolder />
        </Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />

      <div className="sub-title">Wrap</div>
      <Flex wrap="wrap">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace size="lg" />

      <div className="sub-title">Align</div>
      <Flex justify="center">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="end">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="between">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
      </Flex>

      <WhiteSpace />
      <Flex align="start">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline small" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="end">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline small" />
        <PlaceHolder className="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="baseline">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline small" />
        <PlaceHolder className="inline" />
      </Flex>
    </div>
  );
};

export default FlexExmple;
