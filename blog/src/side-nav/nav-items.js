const navItemNames = {
    home: 'home',
    cat: 'cat',
    search: 'search',
    option: 'option',
    about: 'about',
};

const navItems = [
    { id: 1, name: navItemNames.home, text: '博客主页', icon: 'home' },
    { id: 2, name: navItemNames.cat, text: '文章分类', icon: 'tags-o' },
    { id: 3, name: navItemNames.search, text: '查找文章', icon: 'search' },
    { id: 4, name: navItemNames.option, text: '我要吐槽', icon: 'frown-o' },
    { id: 5, name: navItemNames.about, text: '关于作者', icon: 'ellipsis' },
];

export default navItems;
export { navItemNames };