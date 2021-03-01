import { React, useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SiderbarData } from "../SidebarData";
import { SubMenu } from "../submenu/SubMenu";
import { CartWidget } from "../cartwidget/CartWidget";

import logo from "../../assets/logo.svg";
import "./sidebar.css";

//left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="nav">
        <Link to={"/"} className="nav-icon">
          <FaIcons.FaBars onClick={showSidebar} />
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <CartWidget />
      </div>
      <nav className={sidebar ? "siderbar-nav" : "siderbar-nav hide"}>
        <div className="siderbar-wrap">
          <Link to="#" className="nav-icon">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>

          {SiderbarData.map((item) => {
            return <SubMenu item={item} key={item.id} />;
          })}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
