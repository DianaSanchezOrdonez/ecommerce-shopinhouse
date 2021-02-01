import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { SiderbarData } from '../SidebarData';
import { SubMenu } from '../submenu/SubMenu';

import logo from '../../assets/logo.svg'
import './sidebar.css';

//left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};

const Sidebar = () => {

    const [ sidebar, setSidebar ] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='nav'>
                <Link to='#' className="nav-icon">
                    <FaIcons.FaBars onClick = {showSidebar}/>
                </Link>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
            </div>
            <nav className={sidebar ? 'siderbar-nav' : 'siderbar-nav hide'}>
                <div className="siderbar-wrap">
                    <Link to='#' className="nav-icon">
                        <AiIcons.AiOutlineClose onClick = {showSidebar}/>
                    </Link>
                    {SiderbarData.map((item, index) => {
                        return <SubMenu item={item} key={index}/>
                    })}
                </div>
            </nav>
        </>
    )
}

export default Sidebar
