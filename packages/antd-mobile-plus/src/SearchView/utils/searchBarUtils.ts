/*
 * @Description: 
 * @Author: qclong
 * @Date: 2021-02-23 13:01:40
 */
import { SearchFilterDataType } from '../PropsType';

 /**
  * 通过id值获取数组内的某个对象
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