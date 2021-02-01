import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';


export const SiderbarData = [
    {
        title: 'Inicio',
        path: '/inicio',
        icon: <AiIcons.AiOutlineHome/>
    },
    {
        title: 'Categorías',
        path: '/categorias',
        icon: <AiIcons.AiOutlineTag/>,
        iconClosed: <AiIcons.AiOutlineCaretDown />,
        iconOpened: <AiIcons.AiOutlineCaretUp />,
        subNav: [
            {
                title: 'Tecnología',
                path: '/categorias/tec',
                icon: <AiIcons.AiOutlineDesktop/>,
            },
            {
                title: 'Hogar',
                path: '/categorias/hogar',
                icon: <AiIcons.AiOutlineClear/>,
            },
            {
                title: 'Vestimenta',
                path: '/categorias/vestimenta',
                icon: <AiIcons.AiOutlineSkin/>,
            },
            {
                title: 'Libros',
                path: '/categorias/libros',
                icon: <AiIcons.AiOutlineBook/>,
            },
            {
                title: 'Abarrotes',
                path: '/categorias/abarrotes',
                icon: <IoIcons.IoFastFoodOutline/>,
            }
        ]
    },
    {
        title: 'Favoritos',
        path: '/favoritos',
        icon: <AiIcons.AiOutlineHeart/>
    },
    {
        title: 'Resumen',
        path: '/resumen',
        icon: <AiIcons.AiOutlineShoppingCart/>
    }
]

//export default SiderbarData;