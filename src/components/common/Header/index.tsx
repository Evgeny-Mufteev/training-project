import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import MenuItem from "./menuItem";

const Header: React.FC = () => {
  console.log("render");

  const [links, setLinks] = useState([
    {
      id: 1,
      link: "/posts",
      name: "Новости",
    },
    {
      id: 2,
      link: "/",
      name: "Меню",
    },
    {
      id: 3,
      link: "/catalog",
      name: "Каталог",
    },
    {
      id: 4,
      link: "/",
      name: "О Компании",
    },
    {
      id: 5,
      link: "/registration",
      name: "Пункт меню",
    },
  ]);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.header__row}>
          <Link to="/">
            <div className={style.header__logo}>
              <img className={style.logo} src="/Logo.png" alt="logo" />
            </div>
          </Link>
          <nav className={style.header__nav}>
            <ul className={style.nav__list}>
              {links.map((el) => (
                <MenuItem key={el.id} name={el.name} path={el.link} />
              ))}
            </ul>
          </nav>
          <div className={style.header__right}>
            <a href="tel:+74952171703" className={style.header__phone}>
              +7 (495) 204-16-15
            </a>
            <Link to="/registration" className={style.nav__reg}>
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
