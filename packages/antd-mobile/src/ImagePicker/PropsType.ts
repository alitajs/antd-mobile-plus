import { ImagePickerPropTypes } from 'antd-mobile/es/image-picker';

export interface ImagePickerPropsType extends ImagePickerPropTypes {
  /**
   * @description       图片文件数组,元素为对象,包含属性 url（必选, 可能还有id, orientation, 以及业务需要的其它属性
   * @description.en-US Picture files array which includes `url`(required) in each object
   * @default           []
   */
  files?: ImagePickerPropTypes['files'];
  /**
   * @description       files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引
   * @description.en-US Callback is called when the value of `files` is changed. The `operationType` is one of `add` or `remove`(the third argument is the removed index).
   */
  onChange?: ImagePickerPropTypes['onChange'];
  /**
   * @description       点击图片触发的回调
   * @description.en-US Callback is called when the user clicks the selected picture
   */
  onImageClick?: ImagePickerPropTypes['onImageClick'];
  /**
   * @description       自定义选择图片的方法
   * @description.en-US Callback is called when the selector button is clicked
   */
  onAddImageClick?: ImagePickerPropTypes['onAddImageClick'];
  /**
   * @description       选择失败
   * @description.en-US failed selection
   */
  onFail?: ImagePickerPropTypes['onFail'];
  /**
   * @description       是否显示添加按钮
   * @description.en-US whether to show selector button
   * @default           true
   */
  selectable?: ImagePickerPropTypes['selectable'];
  /**
   * @description       是否支持多选
   * @description.en-US whether support choose multi images at once
   * @default           false
   */
  multiple?: ImagePickerPropTypes['multiple'];
  /**
   * @description       图片类型
   * @description.en-US File type accept
   * @default           image/*
   */
  accept?: ImagePickerPropTypes['accept'];
  /**
   * @description       单行的图片数量
   * @description.en-US Number of images in line
   * @default           4
   */
  length?: ImagePickerPropTypes['length'];
  /**
   * @description       图片捕获设置, 具体请参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)中关于capture的说明
   * @description.en-US Image capture setting, please refer to the description of capture in [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)
   * @default           `hidden`
   * @default           false
   */
  capture?: ImagePickerPropTypes['capture'];
  /**
   * @description       是否隐藏删除按钮
   * @description.en-US whether to hide delete icon
   * @default           false
   */
  disableDelete?: ImagePickerPropTypes['disableDelete'];
  /**
   * @description       埋点自定义数据
   * @description.en-US tracker
   */
  ext?: any;
}
