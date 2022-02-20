/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../../../store/actions";
import { getUserData } from "../../../store/selectors";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.header__row}>
          <Link to="/">
            <div className={style.logo__header}>
              <img className={style.logo} src="/logo.png" alt="logo" />
            </div>
          </Link>
          <nav>
            <ul className={style.nav__list}>
              <li className={style["nav-list"]}>
                <Link to="/" className={style["nav-item"]}>
                  Main
                </Link>
              </li>
              <li className={style.nav__list}>
                <Link to="/posts" className={style["nav-item"]}>
                  post
                </Link>
              </li>
              <li className={style.nav__list}>
                <Link to="/weather" className={style["nav-item"]}>
                  weather
                </Link>
              </li>
              <li className={style.nav__list}>
                <Link to="//registration" className={style["nav-item"]}>
                  post
                </Link>
              </li>
            </ul>
          </nav>
          {userData.firstName && userData.lastName ? (
            <div className={style.registration__wrap}>
              <p className={style.registration__firstName}>
                {userData.firstName}
              </p>
              <p className={style.registration__lastName}>
                {userData.lastName}
              </p>
              <button
                type="button"
                className={style.btn}
                onClick={logoutHandler}>
                <span>LOGOUT</span>
              </button>
            </div>
          ) : (
            <Link to="/registration">
              <button type="button" className={style.btn}>
                <span>SIGN UP</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
