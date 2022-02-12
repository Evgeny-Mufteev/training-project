import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import SocialLinkFooter from "./FooterSocialLinks";

import vk from "../../../assets/image/footer/vk.svg";
import fb from "../../../assets/image/footer/fb.svg";
import instagram from "../../../assets/image/footer/instagram.svg";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__row}>
          <Link to="/">
            <div className={style.footer__logo}>
              <img className={style.logo} src="/logo.png" alt="logo" />
            </div>
          </Link>
          <nav className={style.footer__nav}>
            <ul className={style.nav__list}>
              <li className={style["nav__list-item"]}>
                <Link to="/posts" className={style["nav__list-link"]}>
                  Новости
                </Link>
              </li>
              <li className={style["nav__list-item"]}>
                <Link to="/" className={style["nav__list-link"]}>
                  меню
                </Link>
              </li>
              <li className={style["nav__list-item"]}>
                <Link to="/" className={style["nav__list-link"]}>
                  каталог
                </Link>
              </li>
              <li className={style["nav__list-item"]}>
                <Link to="/" className={style["nav__list-link"]}>
                  о компании
                </Link>
              </li>
            </ul>
          </nav>
          <SocialLinkFooter
            socialLink={{
              vk,
              fb,
              instagram,
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
