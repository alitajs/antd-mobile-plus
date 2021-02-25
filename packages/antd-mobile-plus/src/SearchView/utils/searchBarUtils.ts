/*
 * @Author: your name
 * @Date: 2021-02-24 14:42:24
 * @LastEditTime: 2021-02-24 16:13:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /antd-mobile-plus/packages/antd-mobile-plus/src/SearchView/utils/searchBarUtils.ts
 */
import { SearchFilterDataType } from '../PropsType';

 /**
  * @description 通过id值获取数组内的某个对象
  * @param data 原数组
  * @param value id值
  */
export const filterItemWithValue = (data:SearchFilterDataType[] = [], value = ''):SearchFilterDataType=> { 
    if (data.length === 0) {
        return {
            label: '',
            value: ''
        };
    }
    const resultList = data.filter((item: any) => item.value === value);
    if (resultList.length > 0) {
        return resultList[0];
    }
    return data[0];
}