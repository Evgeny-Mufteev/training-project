import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Header.module.scss";

type TMenuItemPropsType = {
  path: string;
  name: string;
};

const MenuItem: React.FC<TMenuItemPropsType> = (props) => {
  const { path, name } = props;
  return (
    <li className={style["nav-item"]}>
      <NavLink className={style["nav-link"]} to={path}>
        {name}
      </NavLink>
    </li>
  );
};
export default MenuItem;
