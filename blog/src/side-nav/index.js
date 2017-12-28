import SideNav from './side-nav';
import { navItemNames } from './nav-items';

export default SideNav;
export { navItemNames };

/**
 * 侧边导航栏组件
 * input: navItemOnClick （必选） 产生导航元素点击事件的高阶函数，参数为name，返回点击事件函数
 * output: SideNav （默认） SideNav组件
 * output: navItemNames （可选） 导航元素name列表
 */