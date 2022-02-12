import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import style from "./PageWrapper.module.scss";

const PageWrapper: React.FC = () => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
