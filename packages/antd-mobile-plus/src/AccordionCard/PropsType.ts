
export interface AccordionCardType {
    /**
     * @description 是否展开
     */
    isExtand: boolean;

    /**
     * @description 展开回调
     */
    onChange: (isExtand: boolean) => void;
}
