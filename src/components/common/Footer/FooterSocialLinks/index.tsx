import React from "react";
import style from "../Footer.module.scss";

type SocialLinkFooterPropsType = {
  socialLink: {
    vk: string;
    fb: string;
    instagram: string;
  };
};

const SocialLinkFooter: React.FC<SocialLinkFooterPropsType> = (props) => {
  const {
    socialLink: { vk, fb, instagram },
  } = props;
  return (
    <div className={style["footer-social"]}>
      <a
        href="https://vk.com/"
        rel="noreferrer"
        target="_blank"
        className={style["footer-link"]}>
        <img className={style["social-link-img"]} src={vk} alt="vk" />
      </a>

      <a
        href="https://www.facebook.com/"
        rel="noreferrer"
        target="_blank"
        className={style["footer-link"]}>
        <img className={style["social-link-img"]} src={fb} alt="fb" />
      </a>

      <a
        href="https://www.instagram.com/"
        rel="noreferrer"
        target="_blank"
        className={style["footer-link"]}>
        <img
          className={style["social-link-img"]}
          src={instagram}
          alt="instagram"
        />
      </a>
    </div>
  );
};

export default SocialLinkFooter;
