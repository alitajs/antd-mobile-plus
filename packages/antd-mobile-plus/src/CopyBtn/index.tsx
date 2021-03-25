/*
 * @Description: 
 * @Autor: qifutao
 * @Date: 2021-03-24 10:13:04
 */

import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import AntdButton from 'antd-mobile/lib/button';
import AntdToast from 'antd-mobile/lib/toast';
import { CopyBtnType } from './PropsType';
import './index.less';

const CopyBtn: FC<CopyBtnType> = (props) => {
  const {
    value,
    text,
    btnAttr,
  } = props;

  const log = useTracker(CopyBtn.displayName, {});

  const handleClick = (param: string) => {
    const fileUrl = param || "";
    const inp = document.createElement("input");
    inp.value = fileUrl;
    document.body.appendChild(inp);
    inp.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    inp.className = "inp";
    inp.style.display = "none";
    inp.remove();
    AntdToast.success("复制成功");
  };

  return (
    <AntdButton
      {...btnAttr}
      onClick={() => {
        log('copyBtnClick')
        handleClick(value);
      }}
    >
      {text}
    </AntdButton>
  );
};

CopyBtn.displayName = 'CopyBtn';

export default withError(CopyBtn);
