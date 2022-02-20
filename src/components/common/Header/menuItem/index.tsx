import React from "react";
import { NavLink } from "react-router-dom";

type TMenuItemPropsType = {
  path: string;
  name: string;
};

const MenuItem: React.FC<TMenuItemPropsType> = (props) => {
  const { path, name } = props;
  return (
    <li>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};
export default MenuItem;
