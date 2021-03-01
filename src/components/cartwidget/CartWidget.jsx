import * as AiIcons from "react-icons/ai";

import "./cartwidget.css";

export const CartWidget = () => {
  return (
    <div className="nav-icon">
      <AiIcons.AiOutlineShoppingCart />
      <span className="span-icon">1</span>
    </div>
  );
};
