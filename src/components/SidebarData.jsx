import * as AiIcons from 'react-icons/ai';

export const SiderbarData = [
    {
        id:1,
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome/>
    },
    {
        id:2,
        title: 'Categories',
        path: '/category',
        icon: <AiIcons.AiOutlineTag/>,
        iconClosed: <AiIcons.AiOutlineCaretDown />,
        iconOpened: <AiIcons.AiOutlineCaretUp />,
        subNav: []
    },
    {
        id:3,
        title: 'My Cart',
        path: '/cart',
        icon: <AiIcons.AiOutlineShoppingCart/>
    },
    {
        id:4,
        title: 'Favorite',
        path: '/favorite',
        icon: <AiIcons.AiOutlineHeart/>
    },
]

//export default SiderbarData;