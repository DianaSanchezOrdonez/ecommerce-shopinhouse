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
        path: '/categoria',
        icon: <AiIcons.AiOutlineTag/>,
        iconClosed: <AiIcons.AiOutlineCaretDown />,
        iconOpened: <AiIcons.AiOutlineCaretUp />,
        subNav: [
            {
                id:2.1,
                title: 'Tecnología',
                path: '/categoria/tec',
                icon: <AiIcons.AiOutlineDesktop/>,
            },
            {
                id:2.2,
                title: 'Hogar',
                path: '/categoria/hogar',
                icon: <AiIcons.AiOutlineClear/>,
            },
            {
                id:2.3,
                title: 'Vestimenta',
                path: '/categoria/vestimenta',
                icon: <AiIcons.AiOutlineSkin/>,
            },
            {
                id:2.4,
                title: 'Libros',
                path: '/categoria/libros',
                icon: <AiIcons.AiOutlineBook/>,
            },
            {
                id:2.5,
                title: 'Abarrotes',
                path: '/categoria/abarrotes',
                icon: <IoIcons.IoFastFoodOutline/>,
            }
        ]
    },
    {
        id:3,
        title: 'Favoritos',
        path: '/favoritos',
        icon: <AiIcons.AiOutlineHeart/>
    },
]

//export default SiderbarData;