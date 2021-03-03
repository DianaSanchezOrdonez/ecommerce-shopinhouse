import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/**Firebase */
import { getFirestore } from '../../firebase/index';

import "./submenu.css";

export const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [categories, setCategories] = useState([]);
  const showSubnav = () => setSubnav(!subnav);

  useEffect(() => {
    /* const getCategories = fetch("https://fakestoreapi.com/products/categories");
    getCategories
      .then((result) => result.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error)); */

    const db = getFirestore();
    const categoriesCollection = db.collection('Categories');
    categoriesCollection.get()
    .then((data) => {
      let categoriesData = data.docs.map((category) => {
        return {...category.data(), id: category.id}
      })
      setCategories(categoriesData)
    })

    return () => {};
  }, []);

  return (
    <>
      <Link
        className="sidebar-link"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <span className="sidebar-label">{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        categories.map((item) => {
          return (
            <Link
              className="dropdown-link"
              to={`/category/${item.id}`}
              key={item.id}
            >
              {item.icon}
              <span className="sidebar-label-subnav">{item.category}</span>
            </Link>
          );
        })}
    </>
  );
};

//export default SubMenu;
