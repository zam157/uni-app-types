import { Component } from '../Component';

/**
 * @desc 覆盖在原生组件之上的视图属性
 */
interface _CoverViewProps {
  /**
   * @desc 设置顶部滚动偏移量
   * @desc 仅在设置了 overflow-y: scroll 成为滚动元素后生效
   */
  scrollTop: number | string;
}

/**
 * @desc 覆盖在原生组件之上的视图
 * @desc app-vue 和小程序框架，渲染引擎是 webview
 * @desc 为了优化体验，部分组件如 map、video、textarea、canvas 通过原生控件实现，原生组件层级高于前端组件
 * @desc 为了能正常覆盖原生组件，设计了 cover-view
 */
type _CoverView = Component<Partial<_CoverViewProps>>;

export { _CoverViewProps as CoverViewProps, _CoverView as CoverView };

declare global {
  namespace UniHelper {
    /**
     * @desc 覆盖在原生组件之上的视图
     */
    export interface CoverViewProps extends _CoverViewProps {}
    /**
     * @desc 覆盖在原生组件之上的视图
     * @desc app-vue 和小程序框架，渲染引擎是 webview
     * @desc 为了优化体验，部分组件如 map、video、textarea、canvas 通过原生控件实现，原生组件层级高于前端组件
     * @desc 为了能正常覆盖原生组件，设计了 cover-view
     */
    export type CoverView = _CoverView;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 覆盖在原生组件之上的视图
     * @desc app-vue 和小程序框架，渲染引擎是 webview
     * @desc 为了优化体验，部分组件如 map、video、textarea、canvas 通过原生控件实现，原生组件层级高于前端组件
     * @desc 为了能正常覆盖原生组件，设计了 cover-view
     */
    CoverView: _CoverView;
  }
}
