import { React, useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SiderbarData } from "../SidebarData";
import { SubMenu } from "../submenu/SubMenu";
import { CartWidget } from "../cartwidget/CartWidget";
import Login from "../../components/login/Login";

import { AuthContext } from "../../context/AuthContext";

import logo from "../../assets/logo.svg";
import "./sidebar.css";

//left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};

const Sidebar = () => {
  const AuthContextUse = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    document.querySelector(".nav-header").addEventListener("click", () => {
      setSidebar(false);
    });
    return () => {};
  }, []);

  return (
    <>
      <div className="nav-header">
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

          <div className="container-btns d-flex-column">
            <button className="btn-login-sidebar"  onClick={handleShow}>
              Login
            </button>
            <button className="btn-logout-sidebar" onClick={() => AuthContextUse.methodsAuth.signOut()}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <Login show={show} setShow={setShow}/>
    </>
  );
};

export default Sidebar;
