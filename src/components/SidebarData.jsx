import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';


export const SiderbarData = [
    {
        id:1,
        title: 'Inicio',
        path: '/inicio',
        icon: <AiIcons.AiOutlineHome/>
    },
    {
        id:2,
        title: 'Categorías',
        path: '/categorias',
        icon: <AiIcons.AiOutlineTag/>,
        iconClosed: <AiIcons.AiOutlineCaretDown />,
        iconOpened: <AiIcons.AiOutlineCaretUp />,
        subNav: [
            {
                id:2.1,
                title: 'Tecnología',
                path: '/categorias/tec',
                icon: <AiIcons.AiOutlineDesktop/>,
            },
            {
                id:2.2,
                title: 'Hogar',
                path: '/categorias/hogar',
                icon: <AiIcons.AiOutlineClear/>,
            },
            {
                id:2.3,
                title: 'Vestimenta',
                path: '/categorias/vestimenta',
                icon: <AiIcons.AiOutlineSkin/>,
            },
            {
                id:2.4,
                title: 'Libros',
                path: '/categorias/libros',
                icon: <AiIcons.AiOutlineBook/>,
            },
            {
                id:2.5,
                title: 'Abarrotes',
                path: '/categorias/abarrotes',
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
    {
        id:4,
        title: 'Resumen',
        path: '/resumen',
        icon: <AiIcons.AiOutlineShoppingCart/>
    }
]

//export default SiderbarData;