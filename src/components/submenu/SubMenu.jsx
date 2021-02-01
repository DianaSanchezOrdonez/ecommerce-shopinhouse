import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import './submenu.css'

export const SubMenu = ({ item, key }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <Link className='sidebar-link' to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <span className="sidebar-label">{ item.title }</span>
                </div>
                <div>
                    {item.subNav && subnav
                    ? item.iconOpened : item.subNav 
                    ? item.iconClosed : null}
                </div>
            </Link>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <Link className='dropdown-link' to={item.path} key={index}>
                        {item.icon}
                        <span className="sidebar-label">{ item.title }</span>
                    </Link>
                )
            })}
        </>
    )
}

//export default SubMenu;
