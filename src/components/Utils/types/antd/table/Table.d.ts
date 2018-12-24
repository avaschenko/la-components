/// <reference types="react" />
import * as React from 'react';
import { Store } from './createStore';
import Column from './Column';
import ColumnGroup from './ColumnGroup';
import { SpinProps } from '../spin';
import {
  TableProps,
  TableState,
  TableComponents,
  TableLocale,
  ColumnProps,
  TableStateFilters,
  SelectionItemSelectFn,
} from './interface';
import { RadioChangeEvent } from '../radio';
import { CheckboxChangeEvent } from '../checkbox';
export default class Table<T> extends React.Component<TableProps<T>, TableState<T>> {
  static Column: typeof Column;
  static ColumnGroup: typeof ColumnGroup;
  static propTypes: {
    dataSource: any;
    columns: any;
    prefixCls: any;
    useFixedHeader: any;
    rowSelection: any;
    className: any;
    size: any;
    loading: any;
    bordered: any;
    onChange: any;
    locale: any;
    dropdownPrefixCls: any;
  };
  static defaultProps: {
    dataSource: never[];
    prefixCls: string;
    useFixedHeader: boolean;
    rowSelection: null;
    className: string;
    size: string;
    loading: boolean;
    bordered: boolean;
    indentSize: number;
    locale: {};
    rowKey: string;
    showHeader: boolean;
  };
  CheckboxPropsCache: {
    [key: string]: any;
  };
  store: Store;
  columns: ColumnProps<T>[];
  components: TableComponents;
  constructor(props: TableProps<T>);
  getCheckboxPropsByItem: (item: T, index: number) => any;
  getDefaultSelection(): any[];
  getDefaultPagination(props: TableProps<T>): {};
  componentWillReceiveProps(nextProps: TableProps<T>): void;
  onRow: (record: T, index: number) => any;
  setSelectedRowKeys(
    selectedRowKeys: string[],
    { selectWay, record, checked, changeRowKeys, nativeEvent }: any
  ): void;
  hasPagination(props?: any): boolean;
  isFiltersChanged(filters: TableStateFilters): boolean;
  getSortOrderColumns(columns?: ColumnProps<T>[]): any;
  getFilteredValueColumns(columns?: ColumnProps<T>[]): any;
  getFiltersFromColumns(columns?: ColumnProps<T>[]): any;
  getDefaultSortOrder(
    columns?: ColumnProps<T>[]
  ): {
    sortColumn: any;
    sortOrder: any;
  };
  getSortStateFromColumns(
    columns?: ColumnProps<T>[]
  ): {
    sortColumn: any;
    sortOrder: any;
  };
  getSorterFn(): ((a: T, b: T) => number) | undefined;
  toggleSortOrder(order: string, column: ColumnProps<T>): void;
  handleFilter: (column: ColumnProps<T>, nextFilters: string[]) => void;
  handleSelect: (record: T, rowIndex: number, e: CheckboxChangeEvent) => void;
  handleRadioSelect: (record: T, rowIndex: number, e: RadioChangeEvent) => void;
  handleSelectRow: (
    selectionKey: string,
    index: number,
    onSelectFunc: SelectionItemSelectFn
  ) => any;
  handlePageChange: (current: number, ...otherArguments: any[]) => void;
  renderSelectionBox: (
    type: 'radio' | 'checkbox' | undefined
  ) => (_: any, record: T, index: number) => JSX.Element;
  getRecordKey: (record: T, index: number) => any;
  getPopupContainer: () => HTMLElement;
  renderRowSelection(locale: TableLocale): ColumnProps<T>[];
  getColumnKey(column: ColumnProps<T>, index?: number): string | number | undefined;
  getMaxCurrent(total: number): number | undefined;
  isSortColumn(column: ColumnProps<T>): boolean;
  renderColumnsDropdown(columns: ColumnProps<T>[], locale: TableLocale): any[];
  handleShowSizeChange: (current: number, pageSize: number) => void;
  renderPagination(paginationPosition: string): JSX.Element | null;
  prepareParamsArguments(state: any): [any, string[], Object];
  findColumn(myKey: string | number): undefined;
  getCurrentPageData(): T[];
  getFlatData(): any[];
  getFlatCurrentPageData(): any[];
  recursiveSort(data: T[], sorterFn: (a: any, b: any) => number): T[];
  getLocalData(): T[];
  createComponents(components?: TableComponents, prevComponents?: TableComponents): void;
  renderTable: (contextLocale: TableLocale, loading: SpinProps) => JSX.Element;
  render(): JSX.Element;
}
