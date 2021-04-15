import React, { FC } from 'react';
import { useSetState } from 'ahooks';
import {
  ActionSheet,
  WingBlank,
  WhiteSpace,
  Button,
  Toast,
} from '@alitajs/antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(
  window.navigator.userAgent,
);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: (e) => e.preventDefault(),
  };
}

interface ActionSheetExmpleProps {}

const ActionSheetExmple: FC<ActionSheetExmpleProps> = (props) => {
  const [state, setState] = useSetState({
    clicked: 'none',
    clicked1: 'none',
    clicked2: 'none',
  });

  const dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map((obj) => ({
    icon: (
      <img
        src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`}
        alt={obj.title}
        style={{ width: 36 }}
      />
    ),
    title: obj.title,
  }));

  const showActionSheet = () => {
    const BUTTONS = [
      'Operation1',
      'Operation2',
      'Operation2',
      'Delete',
      'Cancel',
    ];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        // title: 'title',
        message: 'I am description, description, description',
        maskClosable: true,
        'data-seed': 'logId',
        wrapProps,
      },
      (buttonIndex) => {
        setState({ clicked: BUTTONS[buttonIndex] });
      },
    );
  };

  const showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: dataList,
        // title: 'title',
        message: 'I am description, description, description',
      },
      (buttonIndex) => {
        setState({
          clicked1: buttonIndex > -1 ? dataList[buttonIndex].title : 'cancel',
        });
        // also support Promise
        return new Promise((resolve) => {
          Toast.info('closed after 1000ms');
          setTimeout(resolve, 1000);
        });
      },
    );
  };

  const showShareActionSheetMulpitleLine = () => {
    const data = [
      [...dataList, dataList[2]],
      [dataList[3], dataList[4]],
    ];
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: data,
        message: 'I am description, description, description',
      },
      (buttonIndex, rowIndex) => {
        setState({
          clicked2:
            buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel',
        });
      },
    );
  };

  const showActionSheetBadge = () => {
    const BUTTONS = [
      'Operation1',
      'Operation2',
      'Operation3',
      'Operation4',
      'Operation5',
      'Delete',
      'Cancel',
    ];
    const BADGES = [
      {
        index: 1,
        dot: true,
      },
      {
        index: 2,
        text: 3100,
      },
      {
        index: 3,
        text: '推荐',
      },
      {
        index: 4,
        text: '···',
      },
    ];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        badges: BADGES,
        // title: 'title',
        message: 'I am description, description, description',
        maskClosable: true,
        'data-seed': 'logId',
        wrapProps,
      },
      (buttonIndex) => {
        setState({ clicked: BUTTONS[buttonIndex] });
      },
    );
  };

  return (
    <WingBlank>
      <Button onClick={showActionSheet}>showActionSheet</Button>
      <WhiteSpace />
      <Button onClick={showActionSheetBadge}>showActionSheet&Badge</Button>
      <WhiteSpace />
      <Button onClick={showShareActionSheet}>showShareActionSheet</Button>
      <WhiteSpace />
      <Button onClick={showShareActionSheetMulpitleLine}>
        showShareActionSheetMulpitleLine
      </Button>
    </WingBlank>
  );
};

export default ActionSheetExmple;
