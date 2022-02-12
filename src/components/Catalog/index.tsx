import React from "react";
import ProjectsCart from "./ProjectCart";
import style from "./catalog.module.scss";

import evacuationservicewebp from "../../assets/image/ProjectsCart/1evacuationservicewebp.webp";
import evacuationservicejpg from "../../assets/image/ProjectsCart/1evacuationservicejpg.jpg";

import stnizhegorodetswebp from "../../assets/image/ProjectsCart/2productcartwebp.webp";
import stnizhegorodetjpg from "../../assets/image/ProjectsCart/2productcartjpg.jpg";

import diagnostictechewebp from "../../assets/image/ProjectsCart/3productcartwebp.webp";
import diagnostictechjpg from "../../assets/image/ProjectsCart/3productcartjpg.jpg";

import synergeticwebp from "../../assets/image/ProjectsCart/4productcartwebp.webp";
import synergeticjpg from "../../assets/image/ProjectsCart/4productcartjpg.jpg";

import vitawebp from "../../assets/image/ProjectsCart/5productcartwebp.webp";
import vitajpg from "../../assets/image/ProjectsCart/5productcartjpg.jpg";

import vgtrkwebp from "../../assets/image/ProjectsCart/6productcartwebp.webp";
import vgtrkjpg from "../../assets/image/ProjectsCart/6productcartjpg.jpg";

const projects = [
  {
    id: 1,
    productCardTitle: `"Служба эвакуации"`,
    productCardPrice: "2 700$",
    webp: evacuationservicewebp,
    jpg: evacuationservicejpg,
  },
  {
    id: 2,
    productCardTitle: `"ст нижегородец"`,
    productCardPrice: "6 000$",
    webp: stnizhegorodetswebp,
    jpg: stnizhegorodetjpg,
  },
  {
    id: 3,
    productCardTitle: `"Диагностические технологии"`,
    productCardPrice: "12 000$",
    webp: diagnostictechewebp,
    jpg: diagnostictechjpg,
  },
  {
    id: 4,
    productCardTitle: `"synergetic"`,
    productCardPrice: "4 700$",
    webp: synergeticwebp,
    jpg: synergeticjpg,
  },
  {
    id: 5,
    productCardTitle: `"vita"`,
    productCardPrice: "10 600$",
    webp: vitawebp,
    jpg: vitajpg,
  },
  {
    id: 6,
    productCardTitle: `"Вгтрк"`,
    productCardPrice: "18 000$",
    webp: vgtrkwebp,
    jpg: vgtrkjpg,
  },
];

const Catalog = () => {
  return (
    <div className={style.container}>
      <h1 className={style["section-title"]}>Каталог продуктов</h1>
      <div className={style["product-wrap"]}>
        {projects.map(
          ({ productCardTitle, productCardPrice, webp, jpg, id }) => (
            <ProjectsCart
              key={id}
              productCardTitle={productCardTitle}
              productCardPrice={productCardPrice}
              webp={webp}
              jpg={jpg}
            />
          )
        )}
      </div>
    </div>
  );
};
export default Catalog;
