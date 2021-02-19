export interface StarProps {
  /**
   * 点亮星星评分
   */
  score: number;
  /**
   * 满分值，默认为5
   */
  maxScore: number;
  /**
   * 星星变化事件
   */
  onChange: (n: number) => void;
  /**
  * @description       埋点自定义数据
  * @description.en-US tracker
  */
  ext?: any;
}