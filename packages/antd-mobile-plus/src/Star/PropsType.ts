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
   * 星星变化实践
   */
  onChange: (n: number) => void;
}