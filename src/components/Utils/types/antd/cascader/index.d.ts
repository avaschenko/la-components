/// <reference types="react" />
import * as React from 'react';
import Input from '../input';
export interface CascaderOptionType {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  children?: Array<CascaderOptionType>;
  __IS_FILTERED_OPTION?: boolean;
}
export declare type CascaderExpandTrigger = 'click' | 'hover';
export interface ShowSearchType {
  filter?: (inputValue: string, path: CascaderOptionType[]) => boolean;
  render?: (
    inputValue: string,
    path: CascaderOptionType[],
    prefixCls: string | undefined
  ) => React.ReactNode;
  sort?: (a: CascaderOptionType[], b: CascaderOptionType[], inputValue: string) => number;
  matchInputWidth?: boolean;
}
export interface CascaderProps {
  /** 可选项数据源 */
  options: CascaderOptionType[];
  /** 默认的选中项 */
  defaultValue?: string[];
  /** 指定选中项 */
  value?: string[];
  /** 选择完成后的回调 */
  onChange?: (value: string[], selectedOptions?: CascaderOptionType[]) => void;
  /** 选择后展示的渲染函数 */
  displayRender?: (label: string[], selectedOptions?: CascaderOptionType[]) => React.ReactNode;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 自定义浮层类名 */
  popupClassName?: string;
  /** 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` */
  popupPlacement?: string;
  /** 输入框占位文本*/
  placeholder?: string;
  /** 输入框大小，可选 `large` `default` `small` */
  size?: string;
  /** 禁用*/
  disabled?: boolean;
  /** 是否支持清除*/
  allowClear?: boolean;
  showSearch?: boolean | ShowSearchType;
  notFoundContent?: React.ReactNode;
  loadData?: (selectedOptions?: CascaderOptionType[]) => void;
  /** 次级菜单的展开方式，可选 'click' 和 'hover' */
  expandTrigger?: CascaderExpandTrigger;
  /** 当此项为 true 时，点选每级菜单选项值都会发生变化 */
  changeOnSelect?: boolean;
  /** 浮层可见变化时回调 */
  onPopupVisibleChange?: (popupVisible: boolean) => void;
  prefixCls?: string;
  inputPrefixCls?: string;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  popupVisible?: boolean;
}
export interface CascaderState {
  inputFocused: boolean;
  inputValue: string;
  value: string[];
  popupVisible: boolean | undefined;
  flattenOptions: CascaderOptionType[][];
}
export default class Cascader extends React.Component<CascaderProps, CascaderState> {
  static defaultProps: {
    prefixCls: string;
    inputPrefixCls: string;
    placeholder: string;
    transitionName: string;
    popupPlacement: string;
    options: never[];
    disabled: boolean;
    allowClear: boolean;
    notFoundContent: string;
  };
  cachedOptions: CascaderOptionType[];
  private input;
  constructor(props: CascaderProps);
  componentWillReceiveProps(nextProps: CascaderProps): void;
  handleChange: (value: any, selectedOptions: any[]) => void;
  handlePopupVisibleChange: (popupVisible: boolean) => void;
  handleInputBlur: () => void;
  handleInputClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: (value: string[], selectedOptions?: any[]) => void;
  getLabel(): any;
  clearSelection: (e: React.MouseEvent<HTMLElement>) => void;
  flattenTree(
    options: CascaderOptionType[],
    changeOnSelect: boolean | undefined,
    ancestor?: CascaderOptionType[]
  ): any;
  generateFilteredOptions(prefixCls: string | undefined): CascaderOptionType[];
  focus(): void;
  blur(): void;
  saveInput: (node: Input) => void;
  render(): JSX.Element;
}
