import { PropsType } from 'rmc-pull-to-refresh/lib/PropsType';


export interface PullToRefreshPropsType extends PropsType {
    /**
     * @description       埋点自定义数据
     * @description.en-US tracker
     * @default 
     */
    ext?: any;

    /**
     * @description       拉动方向，可以是 `up` 或 `down`
     * @description.en-US pull direction, options: `up` or `down`
     * @default  down
     */
    direction: PropsType['direction'];

    /**
     * @description       刷新距离
     * @description.en-US distance to refresh
     * @default  25
     */
    distanceToRefresh: PropsType['distanceToRefresh'];

    /**
     * @description       是否显示刷新状态 
     * @description.en-US Whether the view should be indicating an active refresh
     * @default  false
     */
    refreshing: PropsType['refreshing'];

    /**
     * @description       必选, 刷新回调函数
     * @description.en-US required, Called when the view starts refreshing.
     * @default  
     */
    onRefresh: PropsType['onRefresh'];

    /**
     * @description       指示器配置 `{ activate: ReactNode, deactivate: ReactNode, release: ReactNode, finish: ReactNode }`
     * @description.en-US indicator config `{ activate: ReactNode, deactivate: ReactNode, release: ReactNode, finish: ReactNode }
     * @default  
     */
    indicator: PropsType['indicator'];

    /**
     * @description       拉动距离限制, 建议小于 200
     * @description.en-US pull damping, suggest less than 200
     * @default  100
     */
    damping: PropsType['damping'];
}
