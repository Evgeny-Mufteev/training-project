import React, { useState } from "react";
import Modal from "../../common/modal";
import style from "../catalog.module.scss";

type ProjectsCartPropsType = {
  productCardTitle: string;
  productCardPrice: string;
  webp: string;
  jpg: string;
};

const ProjectsCart: React.FC<ProjectsCartPropsType> = (props) => {
  const { productCardTitle, productCardPrice, webp, jpg } = props;
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={style["product-card"]}>
      <div className={style["product-card__inner"]}>
        <div className={style["product-card__image"]}>
          <a href="##" className={style["product-card__link"]}>
            <picture>
              <source srcSet={webp} type="image/webp" />
              <img src={jpg} alt="work" />
            </picture>
          </a>
        </div>

        <div className={style["product-card__action"]}>
          <a href="##" className={style["product-card__fast-view"]}>
            Смотреть кейс
          </a>
          <a
            href="##"
            className={`${style["product-card__add-to-cart"]} ${style["open-btn"]}`}
            onClick={() => setModalActive(true)}>
            Хочу также
          </a>
        </div>
      </div>
      <div className={style["product-card__info"]}>
        <div className={style["product-card__stars"]}>
          <span className={style.active} />
          <span className={style.active} />
          <span className={style.active} />
          <span className={style.active} />
          <span />
        </div>
        <h3 className={style["product-card__title"]}>{productCardTitle}</h3>
        <div className={style["product-card__price"]}>
          бюджет {productCardPrice}
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident
          adipisci, ex reprehenderit explicabo expedita temporibus officiis
          libero in mollitia. Ducimus tenetur molestias voluptatibus
          dignissimos, officiis, iste suscipit nemo odit temporibus quidem nihil
          quasi non laudantium architecto beatae. Iure veniam quas commodi natus
          hic. Exercitationem quos placeat consectetur esse nam.
        </p>
      </Modal>
    </div>
  );
};
export default ProjectsCart;
