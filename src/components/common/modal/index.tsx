import React from "react";
import style from "./modal.module.scss";

type ModalPropsType = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal: React.FC<ModalPropsType> = (props) => {
  const { active, setActive, children } = props;
  return (
    <div
      role="presentation"
      className={`${style.modal} ${active ? style.active : ""}`}
      onClick={() => setActive(false)}>
      <div
        role="presentation"
        className={`${style.modal__content} ${active ? style.active : ""}`}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
