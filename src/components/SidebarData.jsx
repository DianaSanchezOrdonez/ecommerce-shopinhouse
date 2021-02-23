import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';


export const SiderbarData = [
    {
        id:1,
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiOutlineHome/>
    },
    {
        id:2,
        title: 'Categoría',
        path: '/category',
        icon: <AiIcons.AiOutlineTag/>,
        iconClosed: <AiIcons.AiOutlineCaretDown />,
        iconOpened: <AiIcons.AiOutlineCaretUp />,
        subNav: []
    },
    {
        id:3,
        title: 'Favoritos',
        path: '/favoritos',
        icon: <AiIcons.AiOutlineHeart/>
    },
]

//export default SiderbarData;